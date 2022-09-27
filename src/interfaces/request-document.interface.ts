import { RequestType } from '../enums'

export interface IRequestDocument {
  body: string;
  createdTs: number;
  id: string
  isRead: boolean;
  readTs?: number;
  title: string;
  type: RequestType;
}
