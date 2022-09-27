import { ICardPartial } from './card-partial.interface';
import { Recurrence } from '../enums';
import { IAttachment, ICustomCardField, IShare } from '../interfaces';
export interface ICard extends ICardPartial {
    assignedTo?: string;
    attachments?: {
        [key: string]: IAttachment;
    };
    attachmentsNotes?: string;
    autoRenewal?: boolean;
    billingCycleReminder?: number;
    billingCycleReminderRecurrence?: Recurrence;
    brand?: string;
    cancellationAllowed?: boolean;
    cancellationByTs?: number;
    cancellationCost?: number;
    cancellationHasCost?: boolean;
    company?: string;
    customerSupportAccountNumber?: string;
    customerSupportEmail?: string;
    customerSupportNotes?: string;
    customerSupportPhone?: string;
    customerSupportTimezone?: string;
    customerSupportTimings?: string;
    description?: string;
    duration?: number;
    durationRecurrence?: Recurrence;
    expirationReminder?: number;
    expirationReminderRecurrence?: Recurrence;
    expirationTs?: number;
    generalNotes?: string;
    hidden: boolean;
    labelId?: string;
    otherFields?: {
        [key: string]: ICustomCardField;
    };
    paymentMethodId?: string;
    paymentNotes?: string;
    paymentReceipts?: {
        [key: string]: IAttachment;
    };
    paymentRecurrence?: Recurrence;
    paymentStartTs?: number;
    purchasedAt?: string;
    purchasedFor?: string;
    ratings?: number;
    reminders?: number[];
    rentedFor?: string;
    review?: string;
    shares: {
        [key: string]: IShare;
    };
    suspensionAllowed?: boolean;
    suspensionNotes?: string;
    termsAndConditionsNotes?: string;
    trialPeriodAllowed?: boolean;
    trialPeriodDuration?: number;
    trialPeriodDurationRecurrence?: Recurrence;
    trialPeriodReminder?: number;
    trialPeriodReminderRecurrence?: Recurrence;
}
