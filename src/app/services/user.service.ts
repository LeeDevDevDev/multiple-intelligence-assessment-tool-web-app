import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afFire: AngularFirestore) {}

  getUserByEmail(email: string) {
    return this.afFire
      .collection<User>('users', ref => ref.where('email', '==', email))
      .valueChanges();
  }

  getStudents(uid: string) {
    return this.afFire
      .collection<User>('users', ref => ref.where('doctorUid', '==', uid))
      .valueChanges();
  }
}
