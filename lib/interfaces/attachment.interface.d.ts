import { AttachmentType } from '../enums';
export interface IAttachment {
    createdTs: number;
    type: AttachmentType;
    updatedTs?: number | null;
    url?: string | null;
    id: string;
    mimeType?: string | null;
    name: string;
}
