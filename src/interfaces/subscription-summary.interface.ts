import { SubscriptionDocumentType } from '../enums'
import { IPaymentMethod } from './payment-method.interface'
import { ISubscriptionPartial } from './subscription-partial.interface'

export interface ISubscriptionSummary {
    color: string;
    createdTs: number;
    id: string;
    name: string;
    order: number;
    paymentMethods: { [key: string]: IPaymentMethod },
    pictureUrl?: string | null;
    subscriptionPartials: { [key: string]: ISubscriptionPartial },
    type: SubscriptionDocumentType;
    updatedTs?: number | null;
}
