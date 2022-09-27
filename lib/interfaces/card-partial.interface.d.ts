import { Recurrence } from '../enums';
export interface ICardPartial {
    adminShareWithUserIds?: string[];
    billingCycle?: number;
    billingCycleRecurrence?: Recurrence;
    categoryId?: string | undefined;
    cost?: number;
    createdTs?: number | undefined;
    currency?: string | undefined;
    deckId: string;
    endTs?: number | undefined;
    id: string;
    isShared: boolean;
    pictureUrl?: string | undefined;
    readShareWithUserIds?: string[];
    shareWithUserIds: string[];
    source?: string | undefined;
    startTs?: number;
    suspended?: boolean;
    tags: string[];
    title: string;
    updatedTs?: number | undefined;
    userId: string;
    writeShareWithUserIds?: string[];
}
