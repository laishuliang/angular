'use strict';var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
/**
 *  @internal
 */
exports.APP_COMPONENT_REF_PROMISE = lang_1.CONST_EXPR(new di_1.OpaqueToken('Promise<ComponentRef>'));
/**
 * An {@link angular2/di/OpaqueToken} representing the application root type in the {@link
 * Injector}.
 *
 * ```
 * @Component(...)
 * class MyApp {
 *   ...
 * }
 *
 * bootstrap(MyApp).then((appRef:ApplicationRef) {
 *   expect(appRef.injector.get(appComponentTypeToken)).toEqual(MyApp);
 * });
 *
 * ```
 */
exports.APP_COMPONENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppComponent'));
/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 */
exports.APP_ID = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppId'));
function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 */
exports.APP_ID_RANDOM_PROVIDER = lang_1.CONST_EXPR(new di_1.Provider(exports.APP_ID, { useFactory: _appIdRandomProviderFactory, deps: [] }));
function _randomChar() {
    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 */
exports.PLATFORM_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Initializer"));
/**
 * A function that will be executed when an application is initialized.
 */
exports.APP_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Initializer"));
/**
 * A token which indicates the root directory of the application
 */
exports.PACKAGE_ROOT_URL = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Packages Root URL"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1mRXVkOUd6bS50bXAvYW5ndWxhcjIvc3JjL2NvcmUvYXBwbGljYXRpb25fdG9rZW5zLnRzIl0sIm5hbWVzIjpbIl9hcHBJZFJhbmRvbVByb3ZpZGVyRmFjdG9yeSIsIl9yYW5kb21DaGFyIl0sIm1hcHBpbmdzIjoiQUFBQSxtQkFBb0Msc0JBQXNCLENBQUMsQ0FBQTtBQUMzRCxxQkFBOEMsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RTs7R0FFRztBQUNVLGlDQUF5QixHQUFHLGlCQUFVLENBQUMsSUFBSSxnQkFBVyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUU5Rjs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDVSxxQkFBYSxHQUFnQixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBRXRGOzs7Ozs7OztHQVFHO0FBQ1UsY0FBTSxHQUFnQixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXhFO0lBQ0VBLE1BQU1BLENBQUNBLEtBQUdBLFdBQVdBLEVBQUVBLEdBQUdBLFdBQVdBLEVBQUVBLEdBQUdBLFdBQVdBLEVBQUlBLENBQUNBO0FBQzVEQSxDQUFDQTtBQUVEOztHQUVHO0FBQ1UsOEJBQXNCLEdBQy9CLGlCQUFVLENBQUMsSUFBSSxhQUFRLENBQUMsY0FBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFMUY7SUFDRUMsTUFBTUEsQ0FBQ0Esb0JBQWFBLENBQUNBLFlBQVlBLENBQUNBLEVBQUVBLEdBQUdBLFdBQUlBLENBQUNBLEtBQUtBLENBQUNBLFdBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0FBQ3pFQSxDQUFDQTtBQUVEOztHQUVHO0FBQ1UsNEJBQW9CLEdBQzdCLGlCQUFVLENBQUMsSUFBSSxnQkFBVyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUV4RDs7R0FFRztBQUNVLHVCQUFlLEdBQWdCLGlCQUFVLENBQUMsSUFBSSxnQkFBVyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUVuRzs7R0FFRztBQUNVLHdCQUFnQixHQUN6QixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wYXF1ZVRva2VuLCBQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtDT05TVF9FWFBSLCBNYXRoLCBTdHJpbmdXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG4vKipcbiAqICBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9DT01QT05FTlRfUkVGX1BST01JU0UgPSBDT05TVF9FWFBSKG5ldyBPcGFxdWVUb2tlbignUHJvbWlzZTxDb21wb25lbnRSZWY+JykpO1xuXG4vKipcbiAqIEFuIHtAbGluayBhbmd1bGFyMi9kaS9PcGFxdWVUb2tlbn0gcmVwcmVzZW50aW5nIHRoZSBhcHBsaWNhdGlvbiByb290IHR5cGUgaW4gdGhlIHtAbGlua1xuICogSW5qZWN0b3J9LlxuICpcbiAqIGBgYFxuICogQENvbXBvbmVudCguLi4pXG4gKiBjbGFzcyBNeUFwcCB7XG4gKiAgIC4uLlxuICogfVxuICpcbiAqIGJvb3RzdHJhcChNeUFwcCkudGhlbigoYXBwUmVmOkFwcGxpY2F0aW9uUmVmKSB7XG4gKiAgIGV4cGVjdChhcHBSZWYuaW5qZWN0b3IuZ2V0KGFwcENvbXBvbmVudFR5cGVUb2tlbikpLnRvRXF1YWwoTXlBcHApO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfQ09NUE9ORU5UOiBPcGFxdWVUb2tlbiA9IENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKCdBcHBDb21wb25lbnQnKSk7XG5cbi8qKlxuICogQSBESSBUb2tlbiByZXByZXNlbnRpbmcgYSB1bmlxdWUgc3RyaW5nIGlkIGFzc2lnbmVkIHRvIHRoZSBhcHBsaWNhdGlvbiBieSBBbmd1bGFyIGFuZCB1c2VkXG4gKiBwcmltYXJpbHkgZm9yIHByZWZpeGluZyBhcHBsaWNhdGlvbiBhdHRyaWJ1dGVzIGFuZCBDU1Mgc3R5bGVzIHdoZW5cbiAqIHtAbGluayBWaWV3RW5jYXBzdWxhdGlvbiNFbXVsYXRlZH0gaXMgYmVpbmcgdXNlZC5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0byBhdm9pZCByYW5kb21seSBnZW5lcmF0ZWQgdmFsdWUgdG8gYmUgdXNlZCBhcyBhbiBhcHBsaWNhdGlvbiBpZCwgeW91IGNhbiBwcm92aWRlXG4gKiBhIGN1c3RvbSB2YWx1ZSB2aWEgYSBESSBwcm92aWRlciA8IS0tIFRPRE86IHByb3ZpZGVyIC0tPiBjb25maWd1cmluZyB0aGUgcm9vdCB7QGxpbmsgSW5qZWN0b3J9XG4gKiB1c2luZyB0aGlzIHRva2VuLlxuICovXG5leHBvcnQgY29uc3QgQVBQX0lEOiBPcGFxdWVUb2tlbiA9IENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKCdBcHBJZCcpKTtcblxuZnVuY3Rpb24gX2FwcElkUmFuZG9tUHJvdmlkZXJGYWN0b3J5KCkge1xuICByZXR1cm4gYCR7X3JhbmRvbUNoYXIoKX0ke19yYW5kb21DaGFyKCl9JHtfcmFuZG9tQ2hhcigpfWA7XG59XG5cbi8qKlxuICogUHJvdmlkZXJzIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIHJhbmRvbSBBUFBfSURfVE9LRU4uXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSURfUkFORE9NX1BST1ZJREVSOiBQcm92aWRlciA9XG4gICAgQ09OU1RfRVhQUihuZXcgUHJvdmlkZXIoQVBQX0lELCB7dXNlRmFjdG9yeTogX2FwcElkUmFuZG9tUHJvdmlkZXJGYWN0b3J5LCBkZXBzOiBbXX0pKTtcblxuZnVuY3Rpb24gX3JhbmRvbUNoYXIoKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZ1dyYXBwZXIuZnJvbUNoYXJDb2RlKDk3ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpKTtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIGEgcGxhdGZvcm0gaXMgaW5pdGlhbGl6ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBQTEFURk9STV9JTklUSUFMSVpFUjogT3BhcXVlVG9rZW4gPVxuICAgIENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKFwiUGxhdGZvcm0gSW5pdGlhbGl6ZXJcIikpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYW4gYXBwbGljYXRpb24gaXMgaW5pdGlhbGl6ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSU5JVElBTElaRVI6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJBcHBsaWNhdGlvbiBJbml0aWFsaXplclwiKSk7XG5cbi8qKlxuICogQSB0b2tlbiB3aGljaCBpbmRpY2F0ZXMgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBhcHBsaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgUEFDS0FHRV9ST09UX1VSTDogT3BhcXVlVG9rZW4gPVxuICAgIENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKFwiQXBwbGljYXRpb24gUGFja2FnZXMgUm9vdCBVUkxcIikpO1xuIl19