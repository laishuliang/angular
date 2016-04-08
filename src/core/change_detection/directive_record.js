'use strict';var lang_1 = require('angular2/src/facade/lang');
var constants_1 = require('./constants');
var DirectiveIndex = (function () {
    function DirectiveIndex(elementIndex, directiveIndex) {
        this.elementIndex = elementIndex;
        this.directiveIndex = directiveIndex;
    }
    Object.defineProperty(DirectiveIndex.prototype, "name", {
        get: function () { return this.elementIndex + "_" + this.directiveIndex; },
        enumerable: true,
        configurable: true
    });
    return DirectiveIndex;
})();
exports.DirectiveIndex = DirectiveIndex;
var DirectiveRecord = (function () {
    function DirectiveRecord(_a) {
        var _b = _a === void 0 ? {} : _a, directiveIndex = _b.directiveIndex, callAfterContentInit = _b.callAfterContentInit, callAfterContentChecked = _b.callAfterContentChecked, callAfterViewInit = _b.callAfterViewInit, callAfterViewChecked = _b.callAfterViewChecked, callOnChanges = _b.callOnChanges, callDoCheck = _b.callDoCheck, callOnInit = _b.callOnInit, callOnDestroy = _b.callOnDestroy, changeDetection = _b.changeDetection, outputs = _b.outputs;
        this.directiveIndex = directiveIndex;
        this.callAfterContentInit = lang_1.normalizeBool(callAfterContentInit);
        this.callAfterContentChecked = lang_1.normalizeBool(callAfterContentChecked);
        this.callOnChanges = lang_1.normalizeBool(callOnChanges);
        this.callAfterViewInit = lang_1.normalizeBool(callAfterViewInit);
        this.callAfterViewChecked = lang_1.normalizeBool(callAfterViewChecked);
        this.callDoCheck = lang_1.normalizeBool(callDoCheck);
        this.callOnInit = lang_1.normalizeBool(callOnInit);
        this.callOnDestroy = lang_1.normalizeBool(callOnDestroy);
        this.changeDetection = changeDetection;
        this.outputs = outputs;
    }
    DirectiveRecord.prototype.isDefaultChangeDetection = function () {
        return constants_1.isDefaultChangeDetectionStrategy(this.changeDetection);
    };
    return DirectiveRecord;
})();
exports.DirectiveRecord = DirectiveRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX3JlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtZkV1ZDlHem0udG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vZGlyZWN0aXZlX3JlY29yZC50cyJdLCJuYW1lcyI6WyJEaXJlY3RpdmVJbmRleCIsIkRpcmVjdGl2ZUluZGV4LmNvbnN0cnVjdG9yIiwiRGlyZWN0aXZlSW5kZXgubmFtZSIsIkRpcmVjdGl2ZVJlY29yZCIsIkRpcmVjdGl2ZVJlY29yZC5jb25zdHJ1Y3RvciIsIkRpcmVjdGl2ZVJlY29yZC5pc0RlZmF1bHRDaGFuZ2VEZXRlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFvRCwwQkFBMEIsQ0FBQyxDQUFBO0FBQy9FLDBCQUF3RSxhQUFhLENBQUMsQ0FBQTtBQUV0RjtJQUNFQSx3QkFBbUJBLFlBQW9CQSxFQUFTQSxjQUFzQkE7UUFBbkRDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFRQTtRQUFTQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBUUE7SUFBR0EsQ0FBQ0E7SUFFMUVELHNCQUFJQSxnQ0FBSUE7YUFBUkEsY0FBYUUsTUFBTUEsQ0FBSUEsSUFBSUEsQ0FBQ0EsWUFBWUEsU0FBSUEsSUFBSUEsQ0FBQ0EsY0FBZ0JBLENBQUNBLENBQUNBLENBQUNBOzs7T0FBQUY7SUFDdEVBLHFCQUFDQTtBQUFEQSxDQUFDQSxBQUpELElBSUM7QUFKWSxzQkFBYyxpQkFJMUIsQ0FBQTtBQUVEO0lBY0VHLHlCQUFZQSxFQWNOQTtpQ0FBRkMsRUFBRUEsT0FkT0EsY0FBY0Esc0JBQUVBLG9CQUFvQkEsNEJBQUVBLHVCQUF1QkEsK0JBQUVBLGlCQUFpQkEseUJBQ2hGQSxvQkFBb0JBLDRCQUFFQSxhQUFhQSxxQkFBRUEsV0FBV0EsbUJBQUVBLFVBQVVBLGtCQUFFQSxhQUFhQSxxQkFDM0VBLGVBQWVBLHVCQUFFQSxPQUFPQTtRQWFuQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLG9CQUFvQkEsR0FBR0Esb0JBQWFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0E7UUFDaEVBLElBQUlBLENBQUNBLHVCQUF1QkEsR0FBR0Esb0JBQWFBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsQ0FBQ0E7UUFDdEVBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLG9CQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUNsREEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxvQkFBYUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtRQUMxREEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxHQUFHQSxvQkFBYUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtRQUNoRUEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0Esb0JBQWFBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBQzlDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxvQkFBYUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLG9CQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUNsREEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsZUFBZUEsQ0FBQ0E7UUFDdkNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUVERCxrREFBd0JBLEdBQXhCQTtRQUNFRSxNQUFNQSxDQUFDQSw0Q0FBZ0NBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO0lBQ2hFQSxDQUFDQTtJQUNIRixzQkFBQ0E7QUFBREEsQ0FBQ0EsQUE3Q0QsSUE2Q0M7QUE3Q1ksdUJBQWUsa0JBNkMzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHJpbmdXcmFwcGVyLCBub3JtYWxpemVCb29sLCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtpc0RlZmF1bHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZUluZGV4IHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRJbmRleDogbnVtYmVyLCBwdWJsaWMgZGlyZWN0aXZlSW5kZXg6IG51bWJlcikge31cblxuICBnZXQgbmFtZSgpIHsgcmV0dXJuIGAke3RoaXMuZWxlbWVudEluZGV4fV8ke3RoaXMuZGlyZWN0aXZlSW5kZXh9YDsgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlUmVjb3JkIHtcbiAgZGlyZWN0aXZlSW5kZXg6IERpcmVjdGl2ZUluZGV4O1xuICBjYWxsQWZ0ZXJDb250ZW50SW5pdDogYm9vbGVhbjtcbiAgY2FsbEFmdGVyQ29udGVudENoZWNrZWQ6IGJvb2xlYW47XG4gIGNhbGxBZnRlclZpZXdJbml0OiBib29sZWFuO1xuICBjYWxsQWZ0ZXJWaWV3Q2hlY2tlZDogYm9vbGVhbjtcbiAgY2FsbE9uQ2hhbmdlczogYm9vbGVhbjtcbiAgY2FsbERvQ2hlY2s6IGJvb2xlYW47XG4gIGNhbGxPbkluaXQ6IGJvb2xlYW47XG4gIGNhbGxPbkRlc3Ryb3k6IGJvb2xlYW47XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k7XG4gIC8vIGFycmF5IG9mIFtlbWl0dGVyIHByb3BlcnR5IG5hbWUsIGV2ZW50TmFtZV1cbiAgb3V0cHV0czogc3RyaW5nW11bXTtcblxuICBjb25zdHJ1Y3Rvcih7ZGlyZWN0aXZlSW5kZXgsIGNhbGxBZnRlckNvbnRlbnRJbml0LCBjYWxsQWZ0ZXJDb250ZW50Q2hlY2tlZCwgY2FsbEFmdGVyVmlld0luaXQsXG4gICAgICAgICAgICAgICBjYWxsQWZ0ZXJWaWV3Q2hlY2tlZCwgY2FsbE9uQ2hhbmdlcywgY2FsbERvQ2hlY2ssIGNhbGxPbkluaXQsIGNhbGxPbkRlc3Ryb3ksXG4gICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb24sIG91dHB1dHN9OiB7XG4gICAgZGlyZWN0aXZlSW5kZXg/OiBEaXJlY3RpdmVJbmRleCxcbiAgICBjYWxsQWZ0ZXJDb250ZW50SW5pdD86IGJvb2xlYW4sXG4gICAgY2FsbEFmdGVyQ29udGVudENoZWNrZWQ/OiBib29sZWFuLFxuICAgIGNhbGxBZnRlclZpZXdJbml0PzogYm9vbGVhbixcbiAgICBjYWxsQWZ0ZXJWaWV3Q2hlY2tlZD86IGJvb2xlYW4sXG4gICAgY2FsbE9uQ2hhbmdlcz86IGJvb2xlYW4sXG4gICAgY2FsbERvQ2hlY2s/OiBib29sZWFuLFxuICAgIGNhbGxPbkluaXQ/OiBib29sZWFuLFxuICAgIGNhbGxPbkRlc3Ryb3k/OiBib29sZWFuLFxuICAgIGNoYW5nZURldGVjdGlvbj86IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIG91dHB1dHM/OiBzdHJpbmdbXVtdXG4gIH0gPSB7fSkge1xuICAgIHRoaXMuZGlyZWN0aXZlSW5kZXggPSBkaXJlY3RpdmVJbmRleDtcbiAgICB0aGlzLmNhbGxBZnRlckNvbnRlbnRJbml0ID0gbm9ybWFsaXplQm9vbChjYWxsQWZ0ZXJDb250ZW50SW5pdCk7XG4gICAgdGhpcy5jYWxsQWZ0ZXJDb250ZW50Q2hlY2tlZCA9IG5vcm1hbGl6ZUJvb2woY2FsbEFmdGVyQ29udGVudENoZWNrZWQpO1xuICAgIHRoaXMuY2FsbE9uQ2hhbmdlcyA9IG5vcm1hbGl6ZUJvb2woY2FsbE9uQ2hhbmdlcyk7XG4gICAgdGhpcy5jYWxsQWZ0ZXJWaWV3SW5pdCA9IG5vcm1hbGl6ZUJvb2woY2FsbEFmdGVyVmlld0luaXQpO1xuICAgIHRoaXMuY2FsbEFmdGVyVmlld0NoZWNrZWQgPSBub3JtYWxpemVCb29sKGNhbGxBZnRlclZpZXdDaGVja2VkKTtcbiAgICB0aGlzLmNhbGxEb0NoZWNrID0gbm9ybWFsaXplQm9vbChjYWxsRG9DaGVjayk7XG4gICAgdGhpcy5jYWxsT25Jbml0ID0gbm9ybWFsaXplQm9vbChjYWxsT25Jbml0KTtcbiAgICB0aGlzLmNhbGxPbkRlc3Ryb3kgPSBub3JtYWxpemVCb29sKGNhbGxPbkRlc3Ryb3kpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uID0gY2hhbmdlRGV0ZWN0aW9uO1xuICAgIHRoaXMub3V0cHV0cyA9IG91dHB1dHM7XG4gIH1cblxuICBpc0RlZmF1bHRDaGFuZ2VEZXRlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzRGVmYXVsdENoYW5nZURldGVjdGlvblN0cmF0ZWd5KHRoaXMuY2hhbmdlRGV0ZWN0aW9uKTtcbiAgfVxufVxuIl19