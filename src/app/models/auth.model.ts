export interface User {
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;

  uid?: string;
  doctorUid?: string;

  birthDate?: Date;
  gender?: string;
}
