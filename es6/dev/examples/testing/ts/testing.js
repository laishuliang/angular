import { describe, fdescribe, xdescribe, it, fit, xit, beforeEach, afterEach, beforeEachProviders, inject } from 'angular2/testing';
import { provide } from 'angular2/core';
var db;
class MyService {
}
class MyMockService {
}
// #docregion describeIt
describe('some component', () => {
    it('does something', () => {
        // This is a test.
    });
});
// #enddocregion
// #docregion fdescribe
fdescribe('some component', () => {
    it('has a test', () => {
        // This test will run.
    });
});
describe('another component', () => { it('also has a test', () => { throw 'This test will not run.'; }); });
// #enddocregion
// #docregion xdescribe
xdescribe('some component', () => { it('has a test', () => { throw 'This test will not run.'; }); });
describe('another component', () => {
    it('also has a test', () => {
        // This test will run.
    });
});
// #enddocregion
// #docregion fit
describe('some component', () => {
    fit('has a test', () => {
        // This test will run.
    });
    it('has another test', () => { throw 'This test will not run.'; });
});
// #enddocregion
// #docregion xit
describe('some component', () => {
    xit('has a test', () => { throw 'This test will not run.'; });
    it('has another test', () => {
        // This test will run.
    });
});
// #enddocregion
// #docregion beforeEach
describe('some component', () => {
    beforeEach(() => { db.connect(); });
    it('uses the db', () => {
        // Database is connected.
    });
});
// #enddocregion
// #docregion beforeEachProviders
describe('some component', () => {
    beforeEachProviders(() => [provide(MyService, { useClass: MyMockService })]);
    it('uses MyService', inject([MyService], (service) => {
        // service is an instance of MyMockService.
    }));
});
// #enddocregion
// #docregion afterEach
describe('some component', () => {
    afterEach((done) => { db.reset().then((_) => done()); });
    it('uses the db', () => {
        // This test can leave the database in a dirty state.
        // The afterEach will ensure it gets reset.
    });
});
// #enddocregion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtWGZCdlAyZHYudG1wL2FuZ3VsYXIyL2V4YW1wbGVzL3Rlc3RpbmcvdHMvdGVzdGluZy50cyJdLCJuYW1lcyI6WyJNeVNlcnZpY2UiLCJNeU1vY2tTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULEVBQUUsRUFDRixHQUFHLEVBQ0gsR0FBRyxFQUNILFVBQVUsRUFDVixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLE1BQU0sRUFDUCxNQUFNLGtCQUFrQjtPQUNsQixFQUFDLE9BQU8sRUFBQyxNQUFNLGVBQWU7QUFFckMsSUFBSSxFQUFPLENBQUM7QUFDWjtBQUFpQkEsQ0FBQ0E7QUFDbEI7QUFBMENDLENBQUNBO0FBRTNDLHdCQUF3QjtBQUN4QixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDekIsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ0ksa0JBQWtCO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsZ0JBQWdCO0FBRWhCLHVCQUF1QjtBQUN2QixTQUFTLENBQUMsZ0JBQWdCLEVBQUU7SUFDMUIsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUNJLHNCQUFzQjtJQUMxQixDQUFDLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUNILFFBQVEsQ0FBQyxtQkFBbUIsRUFDbkIsUUFBUSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxNQUFNLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RixnQkFBZ0I7QUFFaEIsdUJBQXVCO0FBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBTyxNQUFNLHlCQUF5QixDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDNUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ0ksc0JBQXNCO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsZ0JBQWdCO0FBRWhCLGlCQUFpQjtBQUNqQixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDekIsR0FBRyxDQUFDLFlBQVksRUFBRTtRQUNJLHNCQUFzQjtJQUMxQixDQUFDLENBQUMsQ0FBQztJQUNyQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxNQUFNLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBZ0I7QUFFaEIsaUJBQWlCO0FBQ2pCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN6QixHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsTUFBTSx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtRQUNJLHNCQUFzQjtJQUMxQixDQUFDLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMsQ0FBQztBQUNILGdCQUFnQjtBQUVoQix3QkFBd0I7QUFDeEIsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7UUFDSSx5QkFBeUI7SUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBZ0I7QUFFaEIsaUNBQWlDO0FBQ2pDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN6QixtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFzQjtRQUNuQiwyQ0FBMkM7SUFDL0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQztBQUNILGdCQUFnQjtBQUVoQix1QkFBdUI7QUFDdkIsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLFNBQVMsQ0FBQyxDQUFDLElBQWMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxFQUFFLENBQUMsYUFBYSxFQUFFO1FBQ0kscURBQXFEO1FBQ3JELDJDQUEyQztJQUMvQyxDQUFDLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUNILGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGRlc2NyaWJlLFxuICBmZGVzY3JpYmUsXG4gIHhkZXNjcmliZSxcbiAgaXQsXG4gIGZpdCxcbiAgeGl0LFxuICBiZWZvcmVFYWNoLFxuICBhZnRlckVhY2gsXG4gIGJlZm9yZUVhY2hQcm92aWRlcnMsXG4gIGluamVjdFxufSBmcm9tICdhbmd1bGFyMi90ZXN0aW5nJztcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbnZhciBkYjogYW55O1xuY2xhc3MgTXlTZXJ2aWNlIHt9XG5jbGFzcyBNeU1vY2tTZXJ2aWNlIGltcGxlbWVudHMgTXlTZXJ2aWNlIHt9XG5cbi8vICNkb2NyZWdpb24gZGVzY3JpYmVJdFxuZGVzY3JpYmUoJ3NvbWUgY29tcG9uZW50JywgKCkgPT4ge1xuICBpdCgnZG9lcyBzb21ldGhpbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgdGVzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XG59KTtcbi8vICNlbmRkb2NyZWdpb25cblxuLy8gI2RvY3JlZ2lvbiBmZGVzY3JpYmVcbmZkZXNjcmliZSgnc29tZSBjb21wb25lbnQnLCAoKSA9PiB7XG4gIGl0KCdoYXMgYSB0ZXN0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHRlc3Qgd2lsbCBydW4uXG4gICAgICAgICAgICAgICAgICAgfSk7XG59KTtcbmRlc2NyaWJlKCdhbm90aGVyIGNvbXBvbmVudCcsXG4gICAgICAgICAoKSA9PiB7IGl0KCdhbHNvIGhhcyBhIHRlc3QnLCAoKSA9PiB7IHRocm93ICdUaGlzIHRlc3Qgd2lsbCBub3QgcnVuLic7IH0pOyB9KTtcbi8vICNlbmRkb2NyZWdpb25cblxuLy8gI2RvY3JlZ2lvbiB4ZGVzY3JpYmVcbnhkZXNjcmliZSgnc29tZSBjb21wb25lbnQnLCAoKSA9PiB7IGl0KCdoYXMgYSB0ZXN0JywgKCkgPT4ge3Rocm93ICdUaGlzIHRlc3Qgd2lsbCBub3QgcnVuLid9KTsgfSk7XG5kZXNjcmliZSgnYW5vdGhlciBjb21wb25lbnQnLCAoKSA9PiB7XG4gIGl0KCdhbHNvIGhhcyBhIHRlc3QnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB0ZXN0IHdpbGwgcnVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG59KTtcbi8vICNlbmRkb2NyZWdpb25cblxuLy8gI2RvY3JlZ2lvbiBmaXRcbmRlc2NyaWJlKCdzb21lIGNvbXBvbmVudCcsICgpID0+IHtcbiAgZml0KCdoYXMgYSB0ZXN0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB0ZXN0IHdpbGwgcnVuLlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgaXQoJ2hhcyBhbm90aGVyIHRlc3QnLCAoKSA9PiB7IHRocm93ICdUaGlzIHRlc3Qgd2lsbCBub3QgcnVuLic7IH0pO1xufSk7XG4vLyAjZW5kZG9jcmVnaW9uXG5cbi8vICNkb2NyZWdpb24geGl0XG5kZXNjcmliZSgnc29tZSBjb21wb25lbnQnLCAoKSA9PiB7XG4gIHhpdCgnaGFzIGEgdGVzdCcsICgpID0+IHsgdGhyb3cgJ1RoaXMgdGVzdCB3aWxsIG5vdCBydW4uJzsgfSk7XG4gIGl0KCdoYXMgYW5vdGhlciB0ZXN0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHRlc3Qgd2lsbCBydW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG59KTtcbi8vICNlbmRkb2NyZWdpb25cblxuLy8gI2RvY3JlZ2lvbiBiZWZvcmVFYWNoXG5kZXNjcmliZSgnc29tZSBjb21wb25lbnQnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4geyBkYi5jb25uZWN0KCk7IH0pO1xuICBpdCgndXNlcyB0aGUgZGInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRhYmFzZSBpcyBjb25uZWN0ZWQuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xufSk7XG4vLyAjZW5kZG9jcmVnaW9uXG5cbi8vICNkb2NyZWdpb24gYmVmb3JlRWFjaFByb3ZpZGVyc1xuZGVzY3JpYmUoJ3NvbWUgY29tcG9uZW50JywgKCkgPT4ge1xuICBiZWZvcmVFYWNoUHJvdmlkZXJzKCgpID0+IFtwcm92aWRlKE15U2VydmljZSwge3VzZUNsYXNzOiBNeU1vY2tTZXJ2aWNlfSldKTtcbiAgaXQoJ3VzZXMgTXlTZXJ2aWNlJywgaW5qZWN0KFtNeVNlcnZpY2VdLCAoc2VydmljZTogTXlNb2NrU2VydmljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXJ2aWNlIGlzIGFuIGluc3RhbmNlIG9mIE15TW9ja1NlcnZpY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xufSk7XG4vLyAjZW5kZG9jcmVnaW9uXG5cbi8vICNkb2NyZWdpb24gYWZ0ZXJFYWNoXG5kZXNjcmliZSgnc29tZSBjb21wb25lbnQnLCAoKSA9PiB7XG4gIGFmdGVyRWFjaCgoZG9uZTogRnVuY3Rpb24pID0+IHsgZGIucmVzZXQoKS50aGVuKChfOiBhbnkpID0+IGRvbmUoKSk7IH0pO1xuICBpdCgndXNlcyB0aGUgZGInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHRlc3QgY2FuIGxlYXZlIHRoZSBkYXRhYmFzZSBpbiBhIGRpcnR5IHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGFmdGVyRWFjaCB3aWxsIGVuc3VyZSBpdCBnZXRzIHJlc2V0LlxuICAgICAgICAgICAgICAgICAgICB9KTtcbn0pO1xuLy8gI2VuZGRvY3JlZ2lvblxuIl19