"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    // General
    StatusCode[StatusCode["KO"] = 0] = "KO";
    StatusCode[StatusCode["OK"] = 1] = "OK";
    StatusCode[StatusCode["REQUEST_PAYLOAD_NOT_MALFORMED"] = 2] = "REQUEST_PAYLOAD_NOT_MALFORMED";
    StatusCode[StatusCode["UNKNOWN_ERROR"] = 3] = "UNKNOWN_ERROR";
    StatusCode[StatusCode["UNAUTHORIZED"] = 4] = "UNAUTHORIZED";
    // User
    StatusCode[StatusCode["USER_NOT_FOUND"] = 100] = "USER_NOT_FOUND";
    StatusCode[StatusCode["USER_DISABLED"] = 101] = "USER_DISABLED";
    // USER_IS_GUEST = 102,
    StatusCode[StatusCode["USER_NOT_ALLOWED"] = 103] = "USER_NOT_ALLOWED";
    StatusCode[StatusCode["USER_EMAIL_NOT_VALID"] = 104] = "USER_EMAIL_NOT_VALID";
    StatusCode[StatusCode["USERNAME_ALREADY_TAKEN"] = 105] = "USERNAME_ALREADY_TAKEN";
    StatusCode[StatusCode["EMAIL_ALREADY_TAKEN"] = 106] = "EMAIL_ALREADY_TAKEN";
    StatusCode[StatusCode["CONDITIONS_NOT_ACCEPTED"] = 107] = "CONDITIONS_NOT_ACCEPTED";
    // Business
    // BUSINESS_NOT_FOUND = 200,
    // BUSINESS_DISABLED = 201,
    // BUSINESS_NOT_VALID = 208,
    // Coupon
    // COUPON_NOT_FOUND = 300,
    // COUPON_ALREADY_USED = 301,
    // COUPON_EXPIRED = 302,
    // Firebase Auth
    /**
     * auth/invalid-phone-number
     * Thrown if the phone number has an invalid format.
     */
    StatusCode[StatusCode["FIRE_AUTH_INVALID_PHONE_NUMBER"] = 400] = "FIRE_AUTH_INVALID_PHONE_NUMBER";
    /**
     * auth/missing-phone-number
     * Thrown if the phone number is missing.
     */
    StatusCode[StatusCode["FIRE_AUTH_MISSING_PHONE_NUMBER"] = 401] = "FIRE_AUTH_MISSING_PHONE_NUMBER";
    /**
     * auth/invalid-email
     * The provided value for the email user property is invalid. It must be a string email address.
     */
    StatusCode[StatusCode["FIRE_AUTH_INVALID_EMAIL"] = 402] = "FIRE_AUTH_INVALID_EMAIL";
    /**
     * auth/quota-exceeded
     * Thrown if the SMS quota for the Firebase project has been exceeded.
     */
    StatusCode[StatusCode["FIRE_AUTH_QUOTA_EXCEEDED"] = 403] = "FIRE_AUTH_QUOTA_EXCEEDED";
    /**
     * auth/user-disabled
     * Thrown if the user corresponding to the given phone number has been disabled.
     */
    StatusCode[StatusCode["FIRE_AUTH_USER_DISABLED"] = 404] = "FIRE_AUTH_USER_DISABLED";
    /**
     * auth/unverified-email
     * Thrown if the email of the account is not verified.
     */
    StatusCode[StatusCode["FIRE_AUTH_UNVERIFIED_EMAIL"] = 405] = "FIRE_AUTH_UNVERIFIED_EMAIL";
    /**
     * auth/email-already-exists
     * The provided email is already in use by an existing user. Each user must have a unique email.
     */
    StatusCode[StatusCode["FIRE_AUTH_EMAIL_ALREADY_EXISTS"] = 406] = "FIRE_AUTH_EMAIL_ALREADY_EXISTS";
    /**
     * auth/phone-number-already-exists
     * The provided phone number is already in use by an existing user. Each user must have a unique email.
     */
    StatusCode[StatusCode["FIRE_AUTH_PHONE_NUMBER_ALREADY_EXISTS"] = 407] = "FIRE_AUTH_PHONE_NUMBER_ALREADY_EXISTS";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=status-code.js.map