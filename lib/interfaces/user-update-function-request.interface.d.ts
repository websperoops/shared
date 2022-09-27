import { IDevice } from './device.interface';
import { IPaymentMethod } from './payment-method.interface';
import { ISubscriptionSummarySummary } from './subscription-summary-summary.interface';
import { IToken } from './token.interface';
import { IUserSettings } from './user-settings.interface';
export interface IUserUpdateFunctionRequest {
    authTokens?: IToken[] | null;
    devices?: IDevice[] | null;
    displayName?: string;
    paymentMethods?: {
        [key: string]: IPaymentMethod;
    } | null;
    photoUrl?: string | null;
    settings?: IUserSettings | null;
    summaries?: {
        [key: string]: ISubscriptionSummarySummary;
    } | null;
}
