export interface IShare {
    createdTs: number;
    displayName: string;
    id: string;
    photoUrl?: string | null;
    username: string;
    writePermission?: boolean;
}
