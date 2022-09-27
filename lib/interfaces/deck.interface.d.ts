import { SubscriptionDocumentType } from '../enums';
import { ICardPartial } from './card-partial.interface';
export interface IDeck {
    createdTs: number;
    color: string;
    id: string;
    name: string;
    pictureUrl: string;
    order: number;
    cardPartials: {
        [key: string]: ICardPartial;
    };
    updatedTs: number;
    type: SubscriptionDocumentType;
}
