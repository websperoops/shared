export interface IUserSettings {
    defaultCurrency: string;
    passcode?: string | undefined;
    passcodeUpdateTs?: number | undefined;
    preferredNotificationTime?: string | undefined;
    pushNotificationsEnabled: boolean;
    subscriptionsNotificationsEnabled: boolean;
    usePasscodeForApp?: boolean | undefined;
    userLanguage: string;
    userTimeZone: string;
}
