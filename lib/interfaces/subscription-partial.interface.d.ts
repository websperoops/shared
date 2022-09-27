import { Recurrence } from '../enums';
export interface ISubscriptionPartial {
    assignedTo: string;
    billingCycle: number;
    billingCycleRecurrence: Recurrence;
    categoryId?: string | null;
    cost: number;
    currency?: string | null;
    endTs?: number | null;
    id: string;
    isArchived: boolean;
    isPrivate: boolean;
    isShared: boolean;
    name: string;
    pictureUrl?: string | null;
    shareWithUserIds: string[];
    source?: string | null;
    startTs: number;
}
