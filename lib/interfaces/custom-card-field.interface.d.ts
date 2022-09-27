import { Recurrence } from '../enums';
export interface ICustomCardField {
    /** An additional string value to be used to store string related to the main value such as the `currency` for the 'price' `type` */
    additionalStringValue?: string;
    /** The custom field id (should be UUID) */
    id: string;
    /** The custom field name */
    name?: string;
    numberValue?: number;
    recurrenceValue?: Recurrence;
    stringValue?: string;
    type: 'string' | 'reminder' | 'reminder-date' | 'date' | 'price' | 'number';
}
