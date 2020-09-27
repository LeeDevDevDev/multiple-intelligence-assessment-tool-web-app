import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  isGamesLoading: boolean;
  games: Game[];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    if (!this.games) {
      this.isGamesLoading = true;
    }

    this.gameService.games$.subscribe(gamesRes => {
      this.games = gamesRes;
      this.isGamesLoading = false;
    });
  }
}
