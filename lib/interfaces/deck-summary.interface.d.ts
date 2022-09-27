import { IDeckSectionEnabled } from './deck-section-enabled.interface';
export interface IDeckSummary {
    color?: string;
    enabled: boolean;
    id: string;
    name: string;
    sectionsEnabled?: {
        [key: string]: IDeckSectionEnabled;
    };
}
