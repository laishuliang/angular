/**
 * A base class for the WrappedException that can be used to identify
 * a WrappedException from ExceptionHandler without adding circular
 * dependency.
 */
export class BaseWrappedException extends Error {
    constructor(message) {
        super(message);
    }
    get wrapperMessage() { return ''; }
    get wrapperStack() { return null; }
    get originalException() { return null; }
    get originalStack() { return null; }
    get context() { return null; }
    get message() { return ''; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV93cmFwcGVkX2V4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtZmR1U3dyVHMudG1wL2FuZ3VsYXIyL3NyYy9mYWNhZGUvYmFzZV93cmFwcGVkX2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6WyJCYXNlV3JhcHBlZEV4Y2VwdGlvbiIsIkJhc2VXcmFwcGVkRXhjZXB0aW9uLmNvbnN0cnVjdG9yIiwiQmFzZVdyYXBwZWRFeGNlcHRpb24ud3JhcHBlck1lc3NhZ2UiLCJCYXNlV3JhcHBlZEV4Y2VwdGlvbi53cmFwcGVyU3RhY2siLCJCYXNlV3JhcHBlZEV4Y2VwdGlvbi5vcmlnaW5hbEV4Y2VwdGlvbiIsIkJhc2VXcmFwcGVkRXhjZXB0aW9uLm9yaWdpbmFsU3RhY2siLCJCYXNlV3JhcHBlZEV4Y2VwdGlvbi5jb250ZXh0IiwiQmFzZVdyYXBwZWRFeGNlcHRpb24ubWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILDBDQUEwQyxLQUFLO0lBQzdDQSxZQUFZQSxPQUFlQTtRQUFJQyxNQUFNQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUFDQSxDQUFDQTtJQUVoREQsSUFBSUEsY0FBY0EsS0FBYUUsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDM0NGLElBQUlBLFlBQVlBLEtBQVVHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ3hDSCxJQUFJQSxpQkFBaUJBLEtBQVVJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQzdDSixJQUFJQSxhQUFhQSxLQUFVSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN6Q0wsSUFBSUEsT0FBT0EsS0FBVU0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbkNOLElBQUlBLE9BQU9BLEtBQWFPLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0FBQ3RDUCxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGJhc2UgY2xhc3MgZm9yIHRoZSBXcmFwcGVkRXhjZXB0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnlcbiAqIGEgV3JhcHBlZEV4Y2VwdGlvbiBmcm9tIEV4Y2VwdGlvbkhhbmRsZXIgd2l0aG91dCBhZGRpbmcgY2lyY3VsYXJcbiAqIGRlcGVuZGVuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlV3JhcHBlZEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7IHN1cGVyKG1lc3NhZ2UpOyB9XG5cbiAgZ2V0IHdyYXBwZXJNZXNzYWdlKCk6IHN0cmluZyB7IHJldHVybiAnJzsgfVxuICBnZXQgd3JhcHBlclN0YWNrKCk6IGFueSB7IHJldHVybiBudWxsOyB9XG4gIGdldCBvcmlnaW5hbEV4Y2VwdGlvbigpOiBhbnkgeyByZXR1cm4gbnVsbDsgfVxuICBnZXQgb3JpZ2luYWxTdGFjaygpOiBhbnkgeyByZXR1cm4gbnVsbDsgfVxuICBnZXQgY29udGV4dCgpOiBhbnkgeyByZXR1cm4gbnVsbDsgfVxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcgeyByZXR1cm4gJyc7IH1cbn1cbiJdfQ==