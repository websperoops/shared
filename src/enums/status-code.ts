export enum StatusCode {
  // General
  KO = 0,
  OK = 1,
  REQUEST_PAYLOAD_NOT_MALFORMED = 2,
  UNKNOWN_ERROR = 3,
  UNAUTHORIZED = 4,

  // User
  USER_NOT_FOUND = 100,
  USER_DISABLED = 101,
  // USER_IS_GUEST = 102,
  USER_NOT_ALLOWED = 103,
  USER_EMAIL_NOT_VALID = 104,
  USERNAME_ALREADY_TAKEN = 105,
  EMAIL_ALREADY_TAKEN = 106,
  CONDITIONS_NOT_ACCEPTED = 107,

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
  FIRE_AUTH_INVALID_PHONE_NUMBER = 400,

  /**
   * auth/missing-phone-number
   * Thrown if the phone number is missing.
   */
  FIRE_AUTH_MISSING_PHONE_NUMBER = 401,

  /**
   * auth/invalid-email
   * The provided value for the email user property is invalid. It must be a string email address.
   */
  FIRE_AUTH_INVALID_EMAIL = 402,

  /**
   * auth/quota-exceeded
   * Thrown if the SMS quota for the Firebase project has been exceeded.
   */
  FIRE_AUTH_QUOTA_EXCEEDED = 403,

  /**
   * auth/user-disabled
   * Thrown if the user corresponding to the given phone number has been disabled.
   */
  FIRE_AUTH_USER_DISABLED = 404,

  /**
   * auth/unverified-email
   * Thrown if the email of the account is not verified.
   */
  FIRE_AUTH_UNVERIFIED_EMAIL = 405,

  /**
   * auth/email-already-exists
   * The provided email is already in use by an existing user. Each user must have a unique email.
   */
  FIRE_AUTH_EMAIL_ALREADY_EXISTS = 406,

  /**
   * auth/phone-number-already-exists
   * The provided phone number is already in use by an existing user. Each user must have a unique email.
   */
  FIRE_AUTH_PHONE_NUMBER_ALREADY_EXISTS = 407,
}
