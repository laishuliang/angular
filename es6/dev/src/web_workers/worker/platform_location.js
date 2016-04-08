var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from 'angular2/src/core/di';
import { PlatformLocation } from 'angular2/src/router/location/platform_location';
import { FnArg, UiArguments, ClientMessageBrokerFactory } from 'angular2/src/web_workers/shared/client_message_broker';
import { ROUTER_CHANNEL } from 'angular2/src/web_workers/shared/messaging_api';
import { LocationType } from 'angular2/src/web_workers/shared/serialized_types';
import { PromiseWrapper, ObservableWrapper } from 'angular2/src/facade/async';
import { BaseException } from 'angular2/src/facade/exceptions';
import { PRIMITIVE, Serializer } from 'angular2/src/web_workers/shared/serializer';
import { MessageBus } from 'angular2/src/web_workers/shared/message_bus';
import { StringMapWrapper } from 'angular2/src/facade/collection';
import { StringWrapper } from 'angular2/src/facade/lang';
import { deserializeGenericEvent } from './event_deserializer';
export let WebWorkerPlatformLocation = class extends PlatformLocation {
    constructor(brokerFactory, bus, _serializer) {
        super();
        this._serializer = _serializer;
        this._popStateListeners = [];
        this._hashChangeListeners = [];
        this._location = null;
        this._broker = brokerFactory.createMessageBroker(ROUTER_CHANNEL);
        this._channelSource = bus.from(ROUTER_CHANNEL);
        ObservableWrapper.subscribe(this._channelSource, (msg) => {
            var listeners = null;
            if (StringMapWrapper.contains(msg, 'event')) {
                let type = msg['event']['type'];
                if (StringWrapper.equals(type, "popstate")) {
                    listeners = this._popStateListeners;
                }
                else if (StringWrapper.equals(type, "hashchange")) {
                    listeners = this._hashChangeListeners;
                }
                if (listeners !== null) {
                    let e = deserializeGenericEvent(msg['event']);
                    // There was a popState or hashChange event, so the location object thas been updated
                    this._location = this._serializer.deserialize(msg['location'], LocationType);
                    listeners.forEach((fn) => fn(e));
                }
            }
        });
    }
    /** @internal **/
    init() {
        var args = new UiArguments("getLocation");
        var locationPromise = this._broker.runOnService(args, LocationType);
        return PromiseWrapper.then(locationPromise, (val) => {
            this._location = val;
            return true;
        }, (err) => { throw new BaseException(err); });
    }
    getBaseHrefFromDOM() {
        throw new BaseException("Attempt to get base href from DOM from WebWorker. You must either provide a value for the APP_BASE_HREF token through DI or use the hash location strategy.");
    }
    onPopState(fn) { this._popStateListeners.push(fn); }
    onHashChange(fn) { this._hashChangeListeners.push(fn); }
    get pathname() {
        if (this._location === null) {
            return null;
        }
        return this._location.pathname;
    }
    get search() {
        if (this._location === null) {
            return null;
        }
        return this._location.search;
    }
    get hash() {
        if (this._location === null) {
            return null;
        }
        return this._location.hash;
    }
    set pathname(newPath) {
        if (this._location === null) {
            throw new BaseException("Attempt to set pathname before value is obtained from UI");
        }
        this._location.pathname = newPath;
        var fnArgs = [new FnArg(newPath, PRIMITIVE)];
        var args = new UiArguments("setPathname", fnArgs);
        this._broker.runOnService(args, null);
    }
    pushState(state, title, url) {
        var fnArgs = [new FnArg(state, PRIMITIVE), new FnArg(title, PRIMITIVE), new FnArg(url, PRIMITIVE)];
        var args = new UiArguments("pushState", fnArgs);
        this._broker.runOnService(args, null);
    }
    replaceState(state, title, url) {
        var fnArgs = [new FnArg(state, PRIMITIVE), new FnArg(title, PRIMITIVE), new FnArg(url, PRIMITIVE)];
        var args = new UiArguments("replaceState", fnArgs);
        this._broker.runOnService(args, null);
    }
    forward() {
        var args = new UiArguments("forward");
        this._broker.runOnService(args, null);
    }
    back() {
        var args = new UiArguments("back");
        this._broker.runOnService(args, null);
    }
};
WebWorkerPlatformLocation = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [ClientMessageBrokerFactory, MessageBus, Serializer])
], WebWorkerPlatformLocation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVhmQnZQMmR2LnRtcC9hbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvd29ya2VyL3BsYXRmb3JtX2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbIldlYldvcmtlclBsYXRmb3JtTG9jYXRpb24iLCJXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLmNvbnN0cnVjdG9yIiwiV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbi5pbml0IiwiV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbi5nZXRCYXNlSHJlZkZyb21ET00iLCJXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLm9uUG9wU3RhdGUiLCJXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLm9uSGFzaENoYW5nZSIsIldlYldvcmtlclBsYXRmb3JtTG9jYXRpb24ucGF0aG5hbWUiLCJXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLnNlYXJjaCIsIldlYldvcmtlclBsYXRmb3JtTG9jYXRpb24uaGFzaCIsIldlYldvcmtlclBsYXRmb3JtTG9jYXRpb24ucHVzaFN0YXRlIiwiV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbi5yZXBsYWNlU3RhdGUiLCJXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLmZvcndhcmQiLCJXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLmJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCO09BQ3hDLEVBQ0wsZ0JBQWdCLEVBR2pCLE1BQU0sZ0RBQWdEO09BQ2hELEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFFWCwwQkFBMEIsRUFDM0IsTUFBTSx1REFBdUQ7T0FDdkQsRUFBQyxjQUFjLEVBQUMsTUFBTSwrQ0FBK0M7T0FDckUsRUFBQyxZQUFZLEVBQUMsTUFBTSxrREFBa0Q7T0FDdEUsRUFBQyxjQUFjLEVBQWdCLGlCQUFpQixFQUFDLE1BQU0sMkJBQTJCO09BQ2xGLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO09BQ3JELEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLDRDQUE0QztPQUN6RSxFQUFDLFVBQVUsRUFBQyxNQUFNLDZDQUE2QztPQUMvRCxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDO09BQ3hELEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCO09BQy9DLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxzQkFBc0I7QUFFNUQscURBQytDLGdCQUFnQjtJQU83REEsWUFBWUEsYUFBeUNBLEVBQUVBLEdBQWVBLEVBQ2xEQSxXQUF1QkE7UUFDekNDLE9BQU9BLENBQUNBO1FBRFVBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtRQU5uQ0EsdUJBQWtCQSxHQUFvQkEsRUFBRUEsQ0FBQ0E7UUFDekNBLHlCQUFvQkEsR0FBb0JBLEVBQUVBLENBQUNBO1FBQzNDQSxjQUFTQSxHQUFpQkEsSUFBSUEsQ0FBQ0E7UUFNckNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLGFBQWFBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7UUFFakVBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBQy9DQSxpQkFBaUJBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBLEdBQXlCQTtZQUN6RUEsSUFBSUEsU0FBU0EsR0FBb0JBLElBQUlBLENBQUNBO1lBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUM1Q0EsSUFBSUEsSUFBSUEsR0FBV0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0NBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTtnQkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BEQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO29CQUN2QkEsSUFBSUEsQ0FBQ0EsR0FBR0EsdUJBQXVCQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDOUNBLHFGQUFxRkE7b0JBQ3JGQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtvQkFDN0VBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLEVBQVlBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3Q0EsQ0FBQ0E7WUFDSEEsQ0FBQ0E7UUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREQsaUJBQWlCQTtJQUNqQkEsSUFBSUE7UUFDRkUsSUFBSUEsSUFBSUEsR0FBZ0JBLElBQUlBLFdBQVdBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBRXZEQSxJQUFJQSxlQUFlQSxHQUEwQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsRUFBRUEsWUFBWUEsQ0FBQ0EsQ0FBQ0E7UUFDM0ZBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBLEdBQWlCQTtZQUM1REEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsR0FBR0EsQ0FBQ0E7WUFDckJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLE9BQWdCQSxNQUFNQSxJQUFJQSxhQUFhQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMxREEsQ0FBQ0E7SUFFREYsa0JBQWtCQTtRQUNoQkcsTUFBTUEsSUFBSUEsYUFBYUEsQ0FDbkJBLDZKQUE2SkEsQ0FBQ0EsQ0FBQ0E7SUFDcktBLENBQUNBO0lBRURILFVBQVVBLENBQUNBLEVBQXFCQSxJQUFVSSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTdFSixZQUFZQSxDQUFDQSxFQUFxQkEsSUFBVUssSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVqRkwsSUFBSUEsUUFBUUE7UUFDVk0sRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVETixJQUFJQSxNQUFNQTtRQUNSTyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRURQLElBQUlBLElBQUlBO1FBQ05RLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFFRFIsSUFBSUEsUUFBUUEsQ0FBQ0EsT0FBZUE7UUFDMUJNLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSxNQUFNQSxJQUFJQSxhQUFhQSxDQUFDQSwwREFBMERBLENBQUNBLENBQUNBO1FBQ3RGQSxDQUFDQTtRQUVEQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUVsQ0EsSUFBSUEsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0NBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLFdBQVdBLENBQUNBLGFBQWFBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBQ2xEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFFRE4sU0FBU0EsQ0FBQ0EsS0FBVUEsRUFBRUEsS0FBYUEsRUFBRUEsR0FBV0E7UUFDOUNTLElBQUlBLE1BQU1BLEdBQ05BLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLEVBQUVBLElBQUlBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLEVBQUVBLElBQUlBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1FBQzFGQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxXQUFXQSxDQUFDQSxXQUFXQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUNoREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBRURULFlBQVlBLENBQUNBLEtBQVVBLEVBQUVBLEtBQWFBLEVBQUVBLEdBQVdBO1FBQ2pEVSxJQUFJQSxNQUFNQSxHQUNOQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxFQUFFQSxJQUFJQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxFQUFFQSxJQUFJQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMxRkEsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsV0FBV0EsQ0FBQ0EsY0FBY0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ3hDQSxDQUFDQTtJQUVEVixPQUFPQTtRQUNMVyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBRURYLElBQUlBO1FBQ0ZZLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7QUFDSFosQ0FBQ0E7QUFqSEQ7SUFBQyxVQUFVLEVBQUU7OzhCQWlIWjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybUxvY2F0aW9uLFxuICBVcmxDaGFuZ2VFdmVudCxcbiAgVXJsQ2hhbmdlTGlzdGVuZXJcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9sb2NhdGlvbi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge1xuICBGbkFyZyxcbiAgVWlBcmd1bWVudHMsXG4gIENsaWVudE1lc3NhZ2VCcm9rZXIsXG4gIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5XG59IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvY2xpZW50X21lc3NhZ2VfYnJva2VyJztcbmltcG9ydCB7Uk9VVEVSX0NIQU5ORUx9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvbWVzc2FnaW5nX2FwaSc7XG5pbXBvcnQge0xvY2F0aW9uVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9zZXJpYWxpemVkX3R5cGVzJztcbmltcG9ydCB7UHJvbWlzZVdyYXBwZXIsIEV2ZW50RW1pdHRlciwgT2JzZXJ2YWJsZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtQUklNSVRJVkUsIFNlcmlhbGl6ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VyaWFsaXplcic7XG5pbXBvcnQge01lc3NhZ2VCdXN9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvbWVzc2FnZV9idXMnO1xuaW1wb3J0IHtTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtTdHJpbmdXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZUdlbmVyaWNFdmVudH0gZnJvbSAnLi9ldmVudF9kZXNlcmlhbGl6ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbiBleHRlbmRzIFBsYXRmb3JtTG9jYXRpb24ge1xuICBwcml2YXRlIF9icm9rZXI6IENsaWVudE1lc3NhZ2VCcm9rZXI7XG4gIHByaXZhdGUgX3BvcFN0YXRlTGlzdGVuZXJzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcbiAgcHJpdmF0ZSBfaGFzaENoYW5nZUxpc3RlbmVyczogQXJyYXk8RnVuY3Rpb24+ID0gW107XG4gIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvblR5cGUgPSBudWxsO1xuICBwcml2YXRlIF9jaGFubmVsU291cmNlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PjtcblxuICBjb25zdHJ1Y3Rvcihicm9rZXJGYWN0b3J5OiBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeSwgYnVzOiBNZXNzYWdlQnVzLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZXJpYWxpemVyOiBTZXJpYWxpemVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9icm9rZXIgPSBicm9rZXJGYWN0b3J5LmNyZWF0ZU1lc3NhZ2VCcm9rZXIoUk9VVEVSX0NIQU5ORUwpO1xuXG4gICAgdGhpcy5fY2hhbm5lbFNvdXJjZSA9IGJ1cy5mcm9tKFJPVVRFUl9DSEFOTkVMKTtcbiAgICBPYnNlcnZhYmxlV3JhcHBlci5zdWJzY3JpYmUodGhpcy5fY2hhbm5lbFNvdXJjZSwgKG1zZzoge1trZXk6IHN0cmluZ106IGFueX0pID0+IHtcbiAgICAgIHZhciBsaXN0ZW5lcnM6IEFycmF5PEZ1bmN0aW9uPiA9IG51bGw7XG4gICAgICBpZiAoU3RyaW5nTWFwV3JhcHBlci5jb250YWlucyhtc2csICdldmVudCcpKSB7XG4gICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSBtc2dbJ2V2ZW50J11bJ3R5cGUnXTtcbiAgICAgICAgaWYgKFN0cmluZ1dyYXBwZXIuZXF1YWxzKHR5cGUsIFwicG9wc3RhdGVcIikpIHtcbiAgICAgICAgICBsaXN0ZW5lcnMgPSB0aGlzLl9wb3BTdGF0ZUxpc3RlbmVycztcbiAgICAgICAgfSBlbHNlIGlmIChTdHJpbmdXcmFwcGVyLmVxdWFscyh0eXBlLCBcImhhc2hjaGFuZ2VcIikpIHtcbiAgICAgICAgICBsaXN0ZW5lcnMgPSB0aGlzLl9oYXNoQ2hhbmdlTGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAhPT0gbnVsbCkge1xuICAgICAgICAgIGxldCBlID0gZGVzZXJpYWxpemVHZW5lcmljRXZlbnQobXNnWydldmVudCddKTtcbiAgICAgICAgICAvLyBUaGVyZSB3YXMgYSBwb3BTdGF0ZSBvciBoYXNoQ2hhbmdlIGV2ZW50LCBzbyB0aGUgbG9jYXRpb24gb2JqZWN0IHRoYXMgYmVlbiB1cGRhdGVkXG4gICAgICAgICAgdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9zZXJpYWxpemVyLmRlc2VyaWFsaXplKG1zZ1snbG9jYXRpb24nXSwgTG9jYXRpb25UeXBlKTtcbiAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZm46IEZ1bmN0aW9uKSA9PiBmbihlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIGluaXQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdmFyIGFyZ3M6IFVpQXJndW1lbnRzID0gbmV3IFVpQXJndW1lbnRzKFwiZ2V0TG9jYXRpb25cIik7XG5cbiAgICB2YXIgbG9jYXRpb25Qcm9taXNlOiBQcm9taXNlPExvY2F0aW9uVHlwZT4gPSB0aGlzLl9icm9rZXIucnVuT25TZXJ2aWNlKGFyZ3MsIExvY2F0aW9uVHlwZSk7XG4gICAgcmV0dXJuIFByb21pc2VXcmFwcGVyLnRoZW4obG9jYXRpb25Qcm9taXNlLCAodmFsOiBMb2NhdGlvblR5cGUpOiBib29sZWFuID0+IHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgKGVycik6IGJvb2xlYW4gPT4geyB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihlcnIpOyB9KTtcbiAgfVxuXG4gIGdldEJhc2VIcmVmRnJvbURPTSgpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICBcIkF0dGVtcHQgdG8gZ2V0IGJhc2UgaHJlZiBmcm9tIERPTSBmcm9tIFdlYldvcmtlci4gWW91IG11c3QgZWl0aGVyIHByb3ZpZGUgYSB2YWx1ZSBmb3IgdGhlIEFQUF9CQVNFX0hSRUYgdG9rZW4gdGhyb3VnaCBESSBvciB1c2UgdGhlIGhhc2ggbG9jYXRpb24gc3RyYXRlZ3kuXCIpO1xuICB9XG5cbiAgb25Qb3BTdGF0ZShmbjogVXJsQ2hhbmdlTGlzdGVuZXIpOiB2b2lkIHsgdGhpcy5fcG9wU3RhdGVMaXN0ZW5lcnMucHVzaChmbik7IH1cblxuICBvbkhhc2hDaGFuZ2UoZm46IFVybENoYW5nZUxpc3RlbmVyKTogdm9pZCB7IHRoaXMuX2hhc2hDaGFuZ2VMaXN0ZW5lcnMucHVzaChmbik7IH1cblxuICBnZXQgcGF0aG5hbWUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fbG9jYXRpb24gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gIGdldCBzZWFyY2goKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fbG9jYXRpb24gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbi5zZWFyY2g7XG4gIH1cblxuICBnZXQgaGFzaCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9sb2NhdGlvbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uLmhhc2g7XG4gIH1cblxuICBzZXQgcGF0aG5hbWUobmV3UGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX2xvY2F0aW9uID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIkF0dGVtcHQgdG8gc2V0IHBhdGhuYW1lIGJlZm9yZSB2YWx1ZSBpcyBvYnRhaW5lZCBmcm9tIFVJXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2xvY2F0aW9uLnBhdGhuYW1lID0gbmV3UGF0aDtcblxuICAgIHZhciBmbkFyZ3MgPSBbbmV3IEZuQXJnKG5ld1BhdGgsIFBSSU1JVElWRSldO1xuICAgIHZhciBhcmdzID0gbmV3IFVpQXJndW1lbnRzKFwic2V0UGF0aG5hbWVcIiwgZm5BcmdzKTtcbiAgICB0aGlzLl9icm9rZXIucnVuT25TZXJ2aWNlKGFyZ3MsIG51bGwpO1xuICB9XG5cbiAgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGZuQXJncyA9XG4gICAgICAgIFtuZXcgRm5Bcmcoc3RhdGUsIFBSSU1JVElWRSksIG5ldyBGbkFyZyh0aXRsZSwgUFJJTUlUSVZFKSwgbmV3IEZuQXJnKHVybCwgUFJJTUlUSVZFKV07XG4gICAgdmFyIGFyZ3MgPSBuZXcgVWlBcmd1bWVudHMoXCJwdXNoU3RhdGVcIiwgZm5BcmdzKTtcbiAgICB0aGlzLl9icm9rZXIucnVuT25TZXJ2aWNlKGFyZ3MsIG51bGwpO1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGZuQXJncyA9XG4gICAgICAgIFtuZXcgRm5Bcmcoc3RhdGUsIFBSSU1JVElWRSksIG5ldyBGbkFyZyh0aXRsZSwgUFJJTUlUSVZFKSwgbmV3IEZuQXJnKHVybCwgUFJJTUlUSVZFKV07XG4gICAgdmFyIGFyZ3MgPSBuZXcgVWlBcmd1bWVudHMoXCJyZXBsYWNlU3RhdGVcIiwgZm5BcmdzKTtcbiAgICB0aGlzLl9icm9rZXIucnVuT25TZXJ2aWNlKGFyZ3MsIG51bGwpO1xuICB9XG5cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB2YXIgYXJncyA9IG5ldyBVaUFyZ3VtZW50cyhcImZvcndhcmRcIik7XG4gICAgdGhpcy5fYnJva2VyLnJ1bk9uU2VydmljZShhcmdzLCBudWxsKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgVWlBcmd1bWVudHMoXCJiYWNrXCIpO1xuICAgIHRoaXMuX2Jyb2tlci5ydW5PblNlcnZpY2UoYXJncywgbnVsbCk7XG4gIH1cbn1cbiJdfQ==