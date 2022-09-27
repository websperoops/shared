import { NotificationPriority, NotificationType } from '../enums'

export interface INotification {
  body: string;
  createdTs: number;
  data: unknown;
  id: string;
  isRead: boolean;
  priority: NotificationPriority;
  readTs?: number | null;
  title: string;
  subtitle: string;
  type: NotificationType;
}
