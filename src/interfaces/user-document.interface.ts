import { IDeckSummary } from './deck-summary.interface'
import { ICategoryPartial } from './category-partial.interface'
import { IDevice } from './device.interface'
import { IPaymentMethod } from './payment-method.interface'
import { ISubscriptionSummarySummary } from './subscription-summary-summary.interface'
import { IToken } from './token.interface'
import { IUserQuota } from './user-quota.interface'
import { IUserSettings } from './user-settings.interface'

export interface IUserDocument {
  authTokens: IToken[];
  categoryPartials: { [key: string]: ICategoryPartial };
  createdTs: number;
  decks?: { [key: string]: IDeckSummary };
  devices: { [key: string]: IDevice };
  displayName?: string;
  email?: string;
  enabled: boolean;
  id: string;
  name?: string | null;
  paymentMethods?: { [key: string]: IPaymentMethod };
  phoneNumber?: string | null;
  photoUrl?: string | null;
  privacyConditionsAccepted: boolean;
  quota: IUserQuota;
  settings: IUserSettings;
  summaries?: { [key: string]: ISubscriptionSummarySummary };
  tags?: string[] | null;
  termsAndConditionsAccepted: boolean;
  updatedTs?: number;
  username?: string;
}
