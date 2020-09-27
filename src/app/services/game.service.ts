import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games$: Observable<Game[]>;

  constructor(private afFire: AngularFirestore) {
    this.games$ = this.afFire.collection<Game>('games').valueChanges();
  }
}
