import { User } from './User';

export class Center {
  _id: string;
  name: string;
  rate: number;
  rateCount: number;
  address: string;
  lat: number;
  lng: number;
  userId: string;
  user: User;
}
