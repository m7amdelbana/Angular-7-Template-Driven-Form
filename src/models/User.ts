import { Instructor } from './Instructor';
import { Student } from './Student';
import { Center } from './Center';

export class User {
  _id: string;
  email: string;
  password: string;
  image: string;
  deviceToken: string;
  authCode: string;
  accessToken: string;
  phone: string;
  userType: string;
  isAdmin: boolean;
  student: Student;
  instructor: Instructor;
  center: Center;
}
