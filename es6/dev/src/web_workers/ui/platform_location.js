var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserPlatformLocation } from 'angular2/src/router/location/browser_platform_location';
import { Injectable } from 'angular2/src/core/di';
import { ROUTER_CHANNEL } from 'angular2/src/web_workers/shared/messaging_api';
import { ServiceMessageBrokerFactory } from 'angular2/src/web_workers/shared/service_message_broker';
import { PRIMITIVE, Serializer } from 'angular2/src/web_workers/shared/serializer';
import { bind } from './bind';
import { LocationType } from 'angular2/src/web_workers/shared/serialized_types';
import { MessageBus } from 'angular2/src/web_workers/shared/message_bus';
import { ObservableWrapper, PromiseWrapper } from 'angular2/src/facade/async';
export let MessageBasedPlatformLocation = class {
    constructor(_brokerFactory, _platformLocation, bus, _serializer) {
        this._brokerFactory = _brokerFactory;
        this._platformLocation = _platformLocation;
        this._serializer = _serializer;
        this._platformLocation.onPopState(bind(this._sendUrlChangeEvent, this));
        this._platformLocation.onHashChange(bind(this._sendUrlChangeEvent, this));
        this._broker = this._brokerFactory.createMessageBroker(ROUTER_CHANNEL);
        this._channelSink = bus.to(ROUTER_CHANNEL);
    }
    start() {
        this._broker.registerMethod("getLocation", null, bind(this._getLocation, this), LocationType);
        this._broker.registerMethod("setPathname", [PRIMITIVE], bind(this._setPathname, this));
        this._broker.registerMethod("pushState", [PRIMITIVE, PRIMITIVE, PRIMITIVE], bind(this._platformLocation.pushState, this._platformLocation));
        this._broker.registerMethod("replaceState", [PRIMITIVE, PRIMITIVE, PRIMITIVE], bind(this._platformLocation.replaceState, this._platformLocation));
        this._broker.registerMethod("forward", null, bind(this._platformLocation.forward, this._platformLocation));
        this._broker.registerMethod("back", null, bind(this._platformLocation.back, this._platformLocation));
    }
    _getLocation() {
        return PromiseWrapper.resolve(this._platformLocation.location);
    }
    _sendUrlChangeEvent(e) {
        let loc = this._serializer.serialize(this._platformLocation.location, LocationType);
        let serializedEvent = { 'type': e.type };
        ObservableWrapper.callEmit(this._channelSink, { 'event': serializedEvent, 'location': loc });
    }
    _setPathname(pathname) { this._platformLocation.pathname = pathname; }
};
MessageBasedPlatformLocation = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [ServiceMessageBrokerFactory, BrowserPlatformLocation, MessageBus, Serializer])
], MessageBasedPlatformLocation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVhmQnZQMmR2LnRtcC9hbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvdWkvcGxhdGZvcm1fbG9jYXRpb24udHMiXSwibmFtZXMiOlsiTWVzc2FnZUJhc2VkUGxhdGZvcm1Mb2NhdGlvbiIsIk1lc3NhZ2VCYXNlZFBsYXRmb3JtTG9jYXRpb24uY29uc3RydWN0b3IiLCJNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9uLnN0YXJ0IiwiTWVzc2FnZUJhc2VkUGxhdGZvcm1Mb2NhdGlvbi5fZ2V0TG9jYXRpb24iLCJNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9uLl9zZW5kVXJsQ2hhbmdlRXZlbnQiLCJNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9uLl9zZXRQYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdEQUF3RDtPQUN2RixFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQjtPQUN4QyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtDQUErQztPQUNyRSxFQUNMLDJCQUEyQixFQUU1QixNQUFNLHdEQUF3RDtPQUN4RCxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSw0Q0FBNEM7T0FDekUsRUFBQyxJQUFJLEVBQUMsTUFBTSxRQUFRO09BQ3BCLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0RBQWtEO09BQ3RFLEVBQUMsVUFBVSxFQUFDLE1BQU0sNkNBQTZDO09BQy9ELEVBQWUsaUJBQWlCLEVBQUUsY0FBYyxFQUFDLE1BQU0sMkJBQTJCO0FBR3pGO0lBS0VBLFlBQW9CQSxjQUEyQ0EsRUFDM0NBLGlCQUEwQ0EsRUFBRUEsR0FBZUEsRUFDM0RBLFdBQXVCQTtRQUZ2QkMsbUJBQWNBLEdBQWRBLGNBQWNBLENBQTZCQTtRQUMzQ0Esc0JBQWlCQSxHQUFqQkEsaUJBQWlC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QUFZQSxFQUFFQSxFQUFDQSxPQUFPQSxFQUFFQSxlQUFlQSxFQUFFQSxVQUFVQSxFQUFFQSxHQUFHQSxFQUFDQSxDQUFDQSxDQUFDQTtJQUM3RkEsQ0FBQ0E7SUFFT0osWUFBWUEsQ0FBQ0EsUUFBZ0JBLElBQVVLLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDOUZMLENBQUNBO0FBdkNEO0lBQUMsVUFBVSxFQUFFOztpQ0F1Q1o7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlclBsYXRmb3JtTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7Uk9VVEVSX0NIQU5ORUx9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvbWVzc2FnaW5nX2FwaSc7XG5pbXBvcnQge1xuICBTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnksXG4gIFNlcnZpY2VNZXNzYWdlQnJva2VyXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VydmljZV9tZXNzYWdlX2Jyb2tlcic7XG5pbXBvcnQge1BSSU1JVElWRSwgU2VyaWFsaXplcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9zZXJpYWxpemVyJztcbmltcG9ydCB7YmluZH0gZnJvbSAnLi9iaW5kJztcbmltcG9ydCB7TG9jYXRpb25UeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3NlcmlhbGl6ZWRfdHlwZXMnO1xuaW1wb3J0IHtNZXNzYWdlQnVzfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL21lc3NhZ2VfYnVzJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyLCBPYnNlcnZhYmxlV3JhcHBlciwgUHJvbWlzZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtVcmxDaGFuZ2VMaXN0ZW5lcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9sb2NhdGlvbi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9uIHtcbiAgcHJpdmF0ZSBfY2hhbm5lbFNpbms6IEV2ZW50RW1pdHRlcjxPYmplY3Q+O1xuICBwcml2YXRlIF9icm9rZXI6IFNlcnZpY2VNZXNzYWdlQnJva2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Jyb2tlckZhY3Rvcnk6IFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcGxhdGZvcm1Mb2NhdGlvbjogQnJvd3NlclBsYXRmb3JtTG9jYXRpb24sIGJ1czogTWVzc2FnZUJ1cyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VyaWFsaXplcjogU2VyaWFsaXplcikge1xuICAgIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24ub25Qb3BTdGF0ZSg8VXJsQ2hhbmdlTGlzdGVuZXI+YmluZCh0aGlzLl9zZW5kVXJsQ2hhbmdlRXZlbnQsIHRoaXMpKTtcbiAgICB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLm9uSGFzaENoYW5nZSg8VXJsQ2hhbmdlTGlzdGVuZXI+YmluZCh0aGlzLl9zZW5kVXJsQ2hhbmdlRXZlbnQsIHRoaXMpKTtcbiAgICB0aGlzLl9icm9rZXIgPSB0aGlzLl9icm9rZXJGYWN0b3J5LmNyZWF0ZU1lc3NhZ2VCcm9rZXIoUk9VVEVSX0NIQU5ORUwpO1xuICAgIHRoaXMuX2NoYW5uZWxTaW5rID0gYnVzLnRvKFJPVVRFUl9DSEFOTkVMKTtcbiAgfVxuXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Jyb2tlci5yZWdpc3Rlck1ldGhvZChcImdldExvY2F0aW9uXCIsIG51bGwsIGJpbmQodGhpcy5fZ2V0TG9jYXRpb24sIHRoaXMpLCBMb2NhdGlvblR5cGUpO1xuICAgIHRoaXMuX2Jyb2tlci5yZWdpc3Rlck1ldGhvZChcInNldFBhdGhuYW1lXCIsIFtQUklNSVRJVkVdLCBiaW5kKHRoaXMuX3NldFBhdGhuYW1lLCB0aGlzKSk7XG4gICAgdGhpcy5fYnJva2VyLnJlZ2lzdGVyTWV0aG9kKFwicHVzaFN0YXRlXCIsIFtQUklNSVRJVkUsIFBSSU1JVElWRSwgUFJJTUlUSVZFXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZCh0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uLnB1c2hTdGF0ZSwgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbikpO1xuICAgIHRoaXMuX2Jyb2tlci5yZWdpc3Rlck1ldGhvZChcInJlcGxhY2VTdGF0ZVwiLCBbUFJJTUlUSVZFLCBQUklNSVRJVkUsIFBSSU1JVElWRV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQodGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5yZXBsYWNlU3RhdGUsIHRoaXMuX3BsYXRmb3JtTG9jYXRpb24pKTtcbiAgICB0aGlzLl9icm9rZXIucmVnaXN0ZXJNZXRob2QoXCJmb3J3YXJkXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQodGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5mb3J3YXJkLCB0aGlzLl9wbGF0Zm9ybUxvY2F0aW9uKSk7XG4gICAgdGhpcy5fYnJva2VyLnJlZ2lzdGVyTWV0aG9kKFwiYmFja1wiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kKHRoaXMuX3BsYXRmb3JtTG9jYXRpb24uYmFjaywgdGhpcy5fcGxhdGZvcm1Mb2NhdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TG9jYXRpb24oKTogUHJvbWlzZTxMb2NhdGlvbj4ge1xuICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5yZXNvbHZlKHRoaXMuX3BsYXRmb3JtTG9jYXRpb24ubG9jYXRpb24pO1xuICB9XG5cblxuICBwcml2YXRlIF9zZW5kVXJsQ2hhbmdlRXZlbnQoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgbG9jID0gdGhpcy5fc2VyaWFsaXplci5zZXJpYWxpemUodGhpcy5fcGxhdGZvcm1Mb2NhdGlvbi5sb2NhdGlvbiwgTG9jYXRpb25UeXBlKTtcbiAgICBsZXQgc2VyaWFsaXplZEV2ZW50ID0geyd0eXBlJzogZS50eXBlfTtcbiAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jaGFubmVsU2luaywgeydldmVudCc6IHNlcmlhbGl6ZWRFdmVudCwgJ2xvY2F0aW9uJzogbG9jfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYXRobmFtZShwYXRobmFtZTogc3RyaW5nKTogdm9pZCB7IHRoaXMuX3BsYXRmb3JtTG9jYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZTsgfVxufVxuIl19