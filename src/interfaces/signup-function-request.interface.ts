import { DevicePlatform } from '../enums'

export interface ISignupFunctionRequest {
  displayName: string;
  email: string;
  photoUrl?: string | null;
  privacyConditionsAccepted: boolean;
  termsAndConditionsAccepted: boolean;
  username: string;

  // Social auth token
  socialAuthToken?: string | null;
  socialAuthProvider?: string | null;

  // Device
  deviceId: string;
  deviceName: string;
  deviceOs: string;
  devicePlatform: DevicePlatform;
  devicePushNotificationToken?: string | null;

  // Settings
  pushNotificationsEnabled: boolean;
  subscriptionsNotificationsEnabled: boolean;

  /**
   * @type {string} Format ISO 4217 `EUR`
   * @memberof ISignupFunctionRequest
   */
  defaultCurrency?: string;

  /**
   * @type {string} String format `HH:MM`
   * @memberof ISignupFunctionRequest
   */
  preferredNotificationTime?: string;

  /**
   * @type {string} Format ISO 639-1 `it`
   * @memberof ISignupFunctionRequest
   */
  userLanguage: string;

  /**
   * @type {string} Format Name "Europe/Rome"
   * @memberof ISignupFunctionRequest
   */
  userTimeZone: string;
}
