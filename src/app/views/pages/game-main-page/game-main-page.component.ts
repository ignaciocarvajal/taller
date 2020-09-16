import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGameModel } from 'src/app/core/models/gameData.mopdel';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-game-main-page',
  templateUrl: './game-main-page.component.html',
  styleUrls: ['./game-main-page.component.scss']
})
export class GameMainPageComponent implements OnInit {
  games: Observable<IGameModel[]>;
  constructor(
    private readonly gamesService: GamesService,
  ) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    this.games = this.gamesService.getAll();
  }

  goDetail(id: string) {
    console.log('go detail --> ', id);
    
  }

  goModify(id: string) {
    console.log('go modify --> ', id);
  }
  goDelete(id: string) {
    console.log('go delete --> ', id);
    this.gamesService.delete(id).subscribe(
      (res: any) => {
        this.getAllGames();
      })
  }
  

}
