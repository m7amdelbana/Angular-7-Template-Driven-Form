import { User } from './User';
import { Center } from './Center';

export class Instructor {
  _id: string;
  firstName: string;
  lastName: string;
  position: string;
  patch: boolean;
  cvUrl: string;
  user: User;
  rate: number;
  rateCount: number;
  dateOfBirth: string;
  centerId: string;
  center: Center;
}
