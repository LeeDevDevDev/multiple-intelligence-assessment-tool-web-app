import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../models/auth.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afFire: AngularFirestore,
    private route: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afFire.doc<User>('users/' + user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public async signOut(routeTo: string) {
    await this.afAuth.signOut();
    return this.route.navigate(['/' + routeTo]);
  }
}
