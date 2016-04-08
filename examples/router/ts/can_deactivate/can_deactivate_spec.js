'use strict';var e2e_util_1 = require('angular2/src/testing/e2e_util');
var testing_1 = require('angular2/testing');
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    e2e_util_1.browser.wait(EC.presenceOf($(selector)), 20000);
}
function waitForAlert() {
    var EC = protractor.ExpectedConditions;
    e2e_util_1.browser.wait(EC.alertIsPresent(), 1000);
}
describe('can deactivate example app', function () {
    afterEach(e2e_util_1.verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/can_deactivate/';
    it('should not navigate away when prompt is cancelled', function () {
        e2e_util_1.browser.get(URL);
        waitForElement('note-index-cmp');
        element(by.css('#note-1-link')).click();
        waitForElement('note-cmp');
        e2e_util_1.browser.navigate().back();
        waitForAlert();
        e2e_util_1.browser.switchTo().alert().dismiss(); // Use to simulate cancel button
        testing_1.expect(element(by.css('note-cmp')).getText()).toContain('id: 1');
    });
    it('should navigate away when prompt is confirmed', function () {
        e2e_util_1.browser.get(URL);
        waitForElement('note-index-cmp');
        element(by.css('#note-1-link')).click();
        waitForElement('note-cmp');
        e2e_util_1.browser.navigate().back();
        waitForAlert();
        e2e_util_1.browser.switchTo().alert().accept();
        waitForElement('note-index-cmp');
        testing_1.expect(element(by.css('note-index-cmp')).getText()).toContain('Your Notes');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuX2RlYWN0aXZhdGVfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgteU5nS3BEQUwudG1wL2FuZ3VsYXIyL2V4YW1wbGVzL3JvdXRlci90cy9jYW5fZGVhY3RpdmF0ZS9jYW5fZGVhY3RpdmF0ZV9zcGVjLnRzIl0sIm5hbWVzIjpbIndhaXRGb3JFbGVtZW50Iiwid2FpdEZvckFsZXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSx5QkFBNkMsK0JBQStCLENBQUMsQ0FBQTtBQUM3RSx3QkFBcUIsa0JBQWtCLENBQUMsQ0FBQTtBQUV4Qyx3QkFBd0IsUUFBZ0I7SUFDdENBLElBQUlBLEVBQUVBLEdBQVNBLFVBQVdBLENBQUNBLGtCQUFrQkEsQ0FBQ0E7SUFDOUNBLGdFQUFnRUE7SUFDaEVBLGtCQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNsREEsQ0FBQ0E7QUFFRDtJQUNFQyxJQUFJQSxFQUFFQSxHQUFTQSxVQUFXQSxDQUFDQSxrQkFBa0JBLENBQUNBO0lBQzlDQSxrQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsY0FBY0EsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLENBQUNBO0FBRUQsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBRXJDLFNBQVMsQ0FBQyxnQ0FBcUIsQ0FBQyxDQUFDO0lBRWpDLElBQUksR0FBRyxHQUFHLDZDQUE2QyxDQUFDO0lBRXhELEVBQUUsQ0FBQyxtREFBbUQsRUFBRTtRQUN0RCxrQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVqQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQixrQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLFlBQVksRUFBRSxDQUFDO1FBRWYsa0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFFLGdDQUFnQztRQUV2RSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0NBQStDLEVBQUU7UUFDbEQsa0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0Isa0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixZQUFZLEVBQUUsQ0FBQztRQUVmLGtCQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFcEMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakMsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dmVyaWZ5Tm9Ccm93c2VyRXJyb3JzLCBicm93c2VyfSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy9lMmVfdXRpbCc7XG5pbXBvcnQge2V4cGVjdH0gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5cbmZ1bmN0aW9uIHdhaXRGb3JFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgdmFyIEVDID0gKDxhbnk+cHJvdHJhY3RvcikuRXhwZWN0ZWRDb25kaXRpb25zO1xuICAvLyBXYWl0cyBmb3IgdGhlIGVsZW1lbnQgd2l0aCBpZCAnYWJjJyB0byBiZSBwcmVzZW50IG9uIHRoZSBkb20uXG4gIGJyb3dzZXIud2FpdChFQy5wcmVzZW5jZU9mKCQoc2VsZWN0b3IpKSwgMjAwMDApO1xufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQWxlcnQoKSB7XG4gIHZhciBFQyA9ICg8YW55PnByb3RyYWN0b3IpLkV4cGVjdGVkQ29uZGl0aW9ucztcbiAgYnJvd3Nlci53YWl0KEVDLmFsZXJ0SXNQcmVzZW50KCksIDEwMDApO1xufVxuXG5kZXNjcmliZSgnY2FuIGRlYWN0aXZhdGUgZXhhbXBsZSBhcHAnLCBmdW5jdGlvbigpIHtcblxuICBhZnRlckVhY2godmVyaWZ5Tm9Ccm93c2VyRXJyb3JzKTtcblxuICB2YXIgVVJMID0gJ2FuZ3VsYXIyL2V4YW1wbGVzL3JvdXRlci90cy9jYW5fZGVhY3RpdmF0ZS8nO1xuXG4gIGl0KCdzaG91bGQgbm90IG5hdmlnYXRlIGF3YXkgd2hlbiBwcm9tcHQgaXMgY2FuY2VsbGVkJywgZnVuY3Rpb24oKSB7XG4gICAgYnJvd3Nlci5nZXQoVVJMKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnbm90ZS1pbmRleC1jbXAnKTtcblxuICAgIGVsZW1lbnQoYnkuY3NzKCcjbm90ZS0xLWxpbmsnKSkuY2xpY2soKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnbm90ZS1jbXAnKTtcblxuICAgIGJyb3dzZXIubmF2aWdhdGUoKS5iYWNrKCk7XG4gICAgd2FpdEZvckFsZXJ0KCk7XG5cbiAgICBicm93c2VyLnN3aXRjaFRvKCkuYWxlcnQoKS5kaXNtaXNzKCk7ICAvLyBVc2UgdG8gc2ltdWxhdGUgY2FuY2VsIGJ1dHRvblxuXG4gICAgZXhwZWN0KGVsZW1lbnQoYnkuY3NzKCdub3RlLWNtcCcpKS5nZXRUZXh0KCkpLnRvQ29udGFpbignaWQ6IDEnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBuYXZpZ2F0ZSBhd2F5IHdoZW4gcHJvbXB0IGlzIGNvbmZpcm1lZCcsIGZ1bmN0aW9uKCkge1xuICAgIGJyb3dzZXIuZ2V0KFVSTCk7XG4gICAgd2FpdEZvckVsZW1lbnQoJ25vdGUtaW5kZXgtY21wJyk7XG5cbiAgICBlbGVtZW50KGJ5LmNzcygnI25vdGUtMS1saW5rJykpLmNsaWNrKCk7XG4gICAgd2FpdEZvckVsZW1lbnQoJ25vdGUtY21wJyk7XG5cbiAgICBicm93c2VyLm5hdmlnYXRlKCkuYmFjaygpO1xuICAgIHdhaXRGb3JBbGVydCgpO1xuXG4gICAgYnJvd3Nlci5zd2l0Y2hUbygpLmFsZXJ0KCkuYWNjZXB0KCk7XG5cbiAgICB3YWl0Rm9yRWxlbWVudCgnbm90ZS1pbmRleC1jbXAnKTtcblxuICAgIGV4cGVjdChlbGVtZW50KGJ5LmNzcygnbm90ZS1pbmRleC1jbXAnKSkuZ2V0VGV4dCgpKS50b0NvbnRhaW4oJ1lvdXIgTm90ZXMnKTtcbiAgfSk7XG59KTtcbiJdfQ==