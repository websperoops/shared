import { Recurrence, SubscriptionDocumentType } from '../enums'
import { IAttachment } from './attachment.interface'
import { IShare } from './share.interface'
import { ISubscriptionPartial } from './subscription-partial.interface'

export interface ISubscription extends ISubscriptionPartial {
  attachments: { [key: string]: IAttachment };
  attachmentsNotes: string;
  attachmentsNotes2: string;
  autoRenewal: boolean;
  billingCycleReminder?: number;
  billingCycleReminderRecurrence?: Recurrence;
  cancellationAllowed: boolean;
  cancellationAmount: number;
  cancellationDateTs?: number | null;
  cancellationIsFree: boolean;
  contractStartTs?: number;
  customerSupportAccountNumber: string;
  customerSupportEmail: string;
  customerSupportNotes: string;
  customerSupportOperatingHours: string;
  customerSupportPhoneNumber: string;
  customerSupportTimeZoneId?: string | null;
  description: string;
  descriptionNotes: string;
  duration?: number;
  durationRecurrence?: Recurrence;
  endReminder?: number;
  endReminderRecurrence?: Recurrence;
  expirationTs?: number | null;
  otherReminderTs?: number | null;
  paymentMethodId?: string | null;
  paymentNotes: string;
  paymentReceipts: { [key: string]: IAttachment };
  ratings: number;
  refundAllowed: boolean;
  refundAmount: number;
  review: string
  shares: { [key: string]: IShare };
  suspensionAllowed: boolean;
  termsAndConditionsNotes: string;
  trialPeriodDuration?: number;
  trialPeriodDurationRecurrence?: Recurrence;
  trialPeriodEnabled: boolean;
  trialPeriodEndingReminder?: number;
  trialPeriodEndingReminderRecurrence?: Recurrence;
  type: SubscriptionDocumentType;
  vocalNotes: { [key: string]: IAttachment };
}