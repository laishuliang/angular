'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var exceptions_1 = require('angular2/src/facade/exceptions');
var async_1 = require('angular2/src/facade/async');
var collection_1 = require('angular2/src/facade/collection');
var di_1 = require("angular2/src/core/di");
var PostMessageBusSink = (function () {
    function PostMessageBusSink(_postMessageTarget) {
        this._postMessageTarget = _postMessageTarget;
        this._channels = collection_1.StringMapWrapper.create();
        this._messageBuffer = [];
    }
    PostMessageBusSink.prototype.attachToZone = function (zone) {
        var _this = this;
        this._zone = zone;
        this._zone.runOutsideAngular(function () {
            async_1.ObservableWrapper.subscribe(_this._zone.onStable, function (_) { _this._handleOnEventDone(); });
        });
    };
    PostMessageBusSink.prototype.initChannel = function (channel, runInZone) {
        var _this = this;
        if (runInZone === void 0) { runInZone = true; }
        if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
            throw new exceptions_1.BaseException(channel + " has already been initialized");
        }
        var emitter = new async_1.EventEmitter(false);
        var channelInfo = new _Channel(emitter, runInZone);
        this._channels[channel] = channelInfo;
        emitter.subscribe(function (data) {
            var message = { channel: channel, message: data };
            if (runInZone) {
                _this._messageBuffer.push(message);
            }
            else {
                _this._sendMessages([message]);
            }
        });
    };
    PostMessageBusSink.prototype.to = function (channel) {
        if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
            return this._channels[channel].emitter;
        }
        else {
            throw new exceptions_1.BaseException(channel + " is not set up. Did you forget to call initChannel?");
        }
    };
    PostMessageBusSink.prototype._handleOnEventDone = function () {
        if (this._messageBuffer.length > 0) {
            this._sendMessages(this._messageBuffer);
            this._messageBuffer = [];
        }
    };
    PostMessageBusSink.prototype._sendMessages = function (messages) { this._postMessageTarget.postMessage(messages); };
    return PostMessageBusSink;
})();
exports.PostMessageBusSink = PostMessageBusSink;
var PostMessageBusSource = (function () {
    function PostMessageBusSource(eventTarget) {
        var _this = this;
        this._channels = collection_1.StringMapWrapper.create();
        if (eventTarget) {
            eventTarget.addEventListener("message", function (ev) { return _this._handleMessages(ev); });
        }
        else {
            // if no eventTarget is given we assume we're in a WebWorker and listen on the global scope
            addEventListener("message", function (ev) { return _this._handleMessages(ev); });
        }
    }
    PostMessageBusSource.prototype.attachToZone = function (zone) { this._zone = zone; };
    PostMessageBusSource.prototype.initChannel = function (channel, runInZone) {
        if (runInZone === void 0) { runInZone = true; }
        if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
            throw new exceptions_1.BaseException(channel + " has already been initialized");
        }
        var emitter = new async_1.EventEmitter(false);
        var channelInfo = new _Channel(emitter, runInZone);
        this._channels[channel] = channelInfo;
    };
    PostMessageBusSource.prototype.from = function (channel) {
        if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
            return this._channels[channel].emitter;
        }
        else {
            throw new exceptions_1.BaseException(channel + " is not set up. Did you forget to call initChannel?");
        }
    };
    PostMessageBusSource.prototype._handleMessages = function (ev) {
        var messages = ev.data;
        for (var i = 0; i < messages.length; i++) {
            this._handleMessage(messages[i]);
        }
    };
    PostMessageBusSource.prototype._handleMessage = function (data) {
        var channel = data.channel;
        if (collection_1.StringMapWrapper.contains(this._channels, channel)) {
            var channelInfo = this._channels[channel];
            if (channelInfo.runInZone) {
                this._zone.run(function () { channelInfo.emitter.emit(data.message); });
            }
            else {
                channelInfo.emitter.emit(data.message);
            }
        }
    };
    return PostMessageBusSource;
})();
exports.PostMessageBusSource = PostMessageBusSource;
/**
 * A TypeScript implementation of {@link MessageBus} for communicating via JavaScript's
 * postMessage API.
 */
var PostMessageBus = (function () {
    function PostMessageBus(sink, source) {
        this.sink = sink;
        this.source = source;
    }
    PostMessageBus.prototype.attachToZone = function (zone) {
        this.source.attachToZone(zone);
        this.sink.attachToZone(zone);
    };
    PostMessageBus.prototype.initChannel = function (channel, runInZone) {
        if (runInZone === void 0) { runInZone = true; }
        this.source.initChannel(channel, runInZone);
        this.sink.initChannel(channel, runInZone);
    };
    PostMessageBus.prototype.from = function (channel) { return this.source.from(channel); };
    PostMessageBus.prototype.to = function (channel) { return this.sink.to(channel); };
    PostMessageBus = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [PostMessageBusSink, PostMessageBusSource])
    ], PostMessageBus);
    return PostMessageBus;
})();
exports.PostMessageBus = PostMessageBus;
/**
 * Helper class that wraps a channel's {@link EventEmitter} and
 * keeps track of if it should run in the zone.
 */
var _Channel = (function () {
    function _Channel(emitter, runInZone) {
        this.emitter = emitter;
        this.runInZone = runInZone;
    }
    return _Channel;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdF9tZXNzYWdlX2J1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtU1JVT0dvWVcudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvcG9zdF9tZXNzYWdlX2J1cy50cyJdLCJuYW1lcyI6WyJQb3N0TWVzc2FnZUJ1c1NpbmsiLCJQb3N0TWVzc2FnZUJ1c1NpbmsuY29uc3RydWN0b3IiLCJQb3N0TWVzc2FnZUJ1c1NpbmsuYXR0YWNoVG9ab25lIiwiUG9zdE1lc3NhZ2VCdXNTaW5rLmluaXRDaGFubmVsIiwiUG9zdE1lc3NhZ2VCdXNTaW5rLnRvIiwiUG9zdE1lc3NhZ2VCdXNTaW5rLl9oYW5kbGVPbkV2ZW50RG9uZSIsIlBvc3RNZXNzYWdlQnVzU2luay5fc2VuZE1lc3NhZ2VzIiwiUG9zdE1lc3NhZ2VCdXNTb3VyY2UiLCJQb3N0TWVzc2FnZUJ1c1NvdXJjZS5jb25zdHJ1Y3RvciIsIlBvc3RNZXNzYWdlQnVzU291cmNlLmF0dGFjaFRvWm9uZSIsIlBvc3RNZXNzYWdlQnVzU291cmNlLmluaXRDaGFubmVsIiwiUG9zdE1lc3NhZ2VCdXNTb3VyY2UuZnJvbSIsIlBvc3RNZXNzYWdlQnVzU291cmNlLl9oYW5kbGVNZXNzYWdlcyIsIlBvc3RNZXNzYWdlQnVzU291cmNlLl9oYW5kbGVNZXNzYWdlIiwiUG9zdE1lc3NhZ2VCdXMiLCJQb3N0TWVzc2FnZUJ1cy5jb25zdHJ1Y3RvciIsIlBvc3RNZXNzYWdlQnVzLmF0dGFjaFRvWm9uZSIsIlBvc3RNZXNzYWdlQnVzLmluaXRDaGFubmVsIiwiUG9zdE1lc3NhZ2VCdXMuZnJvbSIsIlBvc3RNZXNzYWdlQnVzLnRvIiwiX0NoYW5uZWwiLCJfQ2hhbm5lbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFDL0Usc0JBQThDLDJCQUEyQixDQUFDLENBQUE7QUFD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RUQsZUFBQ0E7QUFBREEsQ0FBQ0EsQUFGRCxJQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTWVzc2FnZUJ1cyxcbiAgTWVzc2FnZUJ1c1NvdXJjZSxcbiAgTWVzc2FnZUJ1c1Npbmtcbn0gZnJvbSBcImFuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvbWVzc2FnZV9idXNcIjtcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbiwgV3JhcHBlZEV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyLCBPYnNlcnZhYmxlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge1N0cmluZ01hcFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29yZS9kaVwiO1xuaW1wb3J0IHtOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3pvbmUvbmdfem9uZSc7XG5cbi8vIFRPRE8oanRlcGxpdHo2MDIpIFJlcGxhY2UgdGhpcyB3aXRoIHRoZSBkZWZpbml0aW9uIGluIGxpYi53ZWJ3b3JrZXIuZC50cygjMzQ5MilcbmV4cG9ydCBpbnRlcmZhY2UgUG9zdE1lc3NhZ2VUYXJnZXQgeyBwb3N0TWVzc2FnZTogKG1lc3NhZ2U6IGFueSwgdHJhbnNmZXI/OltBcnJheUJ1ZmZlcl0pID0+IHZvaWQ7IH1cblxuZXhwb3J0IGNsYXNzIFBvc3RNZXNzYWdlQnVzU2luayBpbXBsZW1lbnRzIE1lc3NhZ2VCdXNTaW5rIHtcbiAgcHJpdmF0ZSBfem9uZTogTmdab25lO1xuICBwcml2YXRlIF9jaGFubmVsczoge1trZXk6IHN0cmluZ106IF9DaGFubmVsfSA9IFN0cmluZ01hcFdyYXBwZXIuY3JlYXRlKCk7XG4gIHByaXZhdGUgX21lc3NhZ2VCdWZmZXI6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0TWVzc2FnZVRhcmdldDogUG9zdE1lc3NhZ2VUYXJnZXQpIHt9XG5cbiAgYXR0YWNoVG9ab25lKHpvbmU6IE5nWm9uZSk6IHZvaWQge1xuICAgIHRoaXMuX3pvbmUgPSB6b25lO1xuICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuc3Vic2NyaWJlKHRoaXMuX3pvbmUub25TdGFibGUsIChfKSA9PiB7IHRoaXMuX2hhbmRsZU9uRXZlbnREb25lKCk7IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdENoYW5uZWwoY2hhbm5lbDogc3RyaW5nLCBydW5JblpvbmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKFN0cmluZ01hcFdyYXBwZXIuY29udGFpbnModGhpcy5fY2hhbm5lbHMsIGNoYW5uZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgJHtjaGFubmVsfSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkYCk7XG4gICAgfVxuXG4gICAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcbiAgICB2YXIgY2hhbm5lbEluZm8gPSBuZXcgX0NoYW5uZWwoZW1pdHRlciwgcnVuSW5ab25lKTtcbiAgICB0aGlzLl9jaGFubmVsc1tjaGFubmVsXSA9IGNoYW5uZWxJbmZvO1xuICAgIGVtaXR0ZXIuc3Vic2NyaWJlKChkYXRhOiBPYmplY3QpID0+IHtcbiAgICAgIHZhciBtZXNzYWdlID0ge2NoYW5uZWw6IGNoYW5uZWwsIG1lc3NhZ2U6IGRhdGF9O1xuICAgICAgaWYgKHJ1bkluWm9uZSkge1xuICAgICAgICB0aGlzLl9tZXNzYWdlQnVmZmVyLnB1c2gobWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZW5kTWVzc2FnZXMoW21lc3NhZ2VdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvKGNoYW5uZWw6IHN0cmluZyk6IEV2ZW50RW1pdHRlcjxhbnk+IHtcbiAgICBpZiAoU3RyaW5nTWFwV3JhcHBlci5jb250YWlucyh0aGlzLl9jaGFubmVscywgY2hhbm5lbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jaGFubmVsc1tjaGFubmVsXS5lbWl0dGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgJHtjaGFubmVsfSBpcyBub3Qgc2V0IHVwLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGluaXRDaGFubmVsP2ApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU9uRXZlbnREb25lKCkge1xuICAgIGlmICh0aGlzLl9tZXNzYWdlQnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3NlbmRNZXNzYWdlcyh0aGlzLl9tZXNzYWdlQnVmZmVyKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VCdWZmZXIgPSBbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZW5kTWVzc2FnZXMobWVzc2FnZXM6IEFycmF5PE9iamVjdD4pIHsgdGhpcy5fcG9zdE1lc3NhZ2VUYXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZXMpOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0TWVzc2FnZUJ1c1NvdXJjZSBpbXBsZW1lbnRzIE1lc3NhZ2VCdXNTb3VyY2Uge1xuICBwcml2YXRlIF96b25lOiBOZ1pvbmU7XG4gIHByaXZhdGUgX2NoYW5uZWxzOiB7W2tleTogc3RyaW5nXTogX0NoYW5uZWx9ID0gU3RyaW5nTWFwV3JhcHBlci5jcmVhdGUoKTtcblxuICBjb25zdHJ1Y3RvcihldmVudFRhcmdldD86IEV2ZW50VGFyZ2V0KSB7XG4gICAgaWYgKGV2ZW50VGFyZ2V0KSB7XG4gICAgICBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXY6IE1lc3NhZ2VFdmVudCkgPT4gdGhpcy5faGFuZGxlTWVzc2FnZXMoZXYpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgbm8gZXZlbnRUYXJnZXQgaXMgZ2l2ZW4gd2UgYXNzdW1lIHdlJ3JlIGluIGEgV2ViV29ya2VyIGFuZCBsaXN0ZW4gb24gdGhlIGdsb2JhbCBzY29wZVxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2OiBNZXNzYWdlRXZlbnQpID0+IHRoaXMuX2hhbmRsZU1lc3NhZ2VzKGV2KSk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoVG9ab25lKHpvbmU6IE5nWm9uZSkgeyB0aGlzLl96b25lID0gem9uZTsgfVxuXG4gIGluaXRDaGFubmVsKGNoYW5uZWw6IHN0cmluZywgcnVuSW5ab25lOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChTdHJpbmdNYXBXcmFwcGVyLmNvbnRhaW5zKHRoaXMuX2NoYW5uZWxzLCBjaGFubmVsKSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYCR7Y2hhbm5lbH0gaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZGApO1xuICAgIH1cblxuICAgIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG4gICAgdmFyIGNoYW5uZWxJbmZvID0gbmV3IF9DaGFubmVsKGVtaXR0ZXIsIHJ1bkluWm9uZSk7XG4gICAgdGhpcy5fY2hhbm5lbHNbY2hhbm5lbF0gPSBjaGFubmVsSW5mbztcbiAgfVxuXG4gIGZyb20oY2hhbm5lbDogc3RyaW5nKTogRXZlbnRFbWl0dGVyPGFueT4ge1xuICAgIGlmIChTdHJpbmdNYXBXcmFwcGVyLmNvbnRhaW5zKHRoaXMuX2NoYW5uZWxzLCBjaGFubmVsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxzW2NoYW5uZWxdLmVtaXR0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGAke2NoYW5uZWx9IGlzIG5vdCBzZXQgdXAuIERpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgaW5pdENoYW5uZWw/YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWVzc2FnZXMoZXY6IE1lc3NhZ2VFdmVudCk6IHZvaWQge1xuICAgIHZhciBtZXNzYWdlcyA9IGV2LmRhdGE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5faGFuZGxlTWVzc2FnZShtZXNzYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWVzc2FnZShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICB2YXIgY2hhbm5lbCA9IGRhdGEuY2hhbm5lbDtcbiAgICBpZiAoU3RyaW5nTWFwV3JhcHBlci5jb250YWlucyh0aGlzLl9jaGFubmVscywgY2hhbm5lbCkpIHtcbiAgICAgIHZhciBjaGFubmVsSW5mbyA9IHRoaXMuX2NoYW5uZWxzW2NoYW5uZWxdO1xuICAgICAgaWYgKGNoYW5uZWxJbmZvLnJ1bkluWm9uZSkge1xuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7IGNoYW5uZWxJbmZvLmVtaXR0ZXIuZW1pdChkYXRhLm1lc3NhZ2UpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5uZWxJbmZvLmVtaXR0ZXIuZW1pdChkYXRhLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgVHlwZVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgTWVzc2FnZUJ1c30gZm9yIGNvbW11bmljYXRpbmcgdmlhIEphdmFTY3JpcHQnc1xuICogcG9zdE1lc3NhZ2UgQVBJLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9zdE1lc3NhZ2VCdXMgaW1wbGVtZW50cyBNZXNzYWdlQnVzIHtcbiAgY29uc3RydWN0b3IocHVibGljIHNpbms6IFBvc3RNZXNzYWdlQnVzU2luaywgcHVibGljIHNvdXJjZTogUG9zdE1lc3NhZ2VCdXNTb3VyY2UpIHt9XG5cbiAgYXR0YWNoVG9ab25lKHpvbmU6IE5nWm9uZSk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLmF0dGFjaFRvWm9uZSh6b25lKTtcbiAgICB0aGlzLnNpbmsuYXR0YWNoVG9ab25lKHpvbmUpO1xuICB9XG5cbiAgaW5pdENoYW5uZWwoY2hhbm5lbDogc3RyaW5nLCBydW5JblpvbmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UuaW5pdENoYW5uZWwoY2hhbm5lbCwgcnVuSW5ab25lKTtcbiAgICB0aGlzLnNpbmsuaW5pdENoYW5uZWwoY2hhbm5lbCwgcnVuSW5ab25lKTtcbiAgfVxuXG4gIGZyb20oY2hhbm5lbDogc3RyaW5nKTogRXZlbnRFbWl0dGVyPGFueT4geyByZXR1cm4gdGhpcy5zb3VyY2UuZnJvbShjaGFubmVsKTsgfVxuXG4gIHRvKGNoYW5uZWw6IHN0cmluZyk6IEV2ZW50RW1pdHRlcjxhbnk+IHsgcmV0dXJuIHRoaXMuc2luay50byhjaGFubmVsKTsgfVxufVxuXG4vKipcbiAqIEhlbHBlciBjbGFzcyB0aGF0IHdyYXBzIGEgY2hhbm5lbCdzIHtAbGluayBFdmVudEVtaXR0ZXJ9IGFuZFxuICoga2VlcHMgdHJhY2sgb2YgaWYgaXQgc2hvdWxkIHJ1biBpbiB0aGUgem9uZS5cbiAqL1xuY2xhc3MgX0NoYW5uZWwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4sIHB1YmxpYyBydW5JblpvbmU6IGJvb2xlYW4pIHt9XG59XG4iXX0=