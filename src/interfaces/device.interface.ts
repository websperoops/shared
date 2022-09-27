import { DevicePlatform } from '../enums'
import { IToken } from './token.interface'

export interface IDevice {
  id: string;
  // Push notifications token
  token?: IToken | null;
  name: string;
  os: string;
  platform: DevicePlatform;
  createdTs: number;
  latestLoginTs: number;
}
