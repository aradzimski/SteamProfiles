import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GamesList } from '../search/games-list';

@Component({
  selector: 'user-games',
  templateUrl: './user-games.component.html',
  styleUrls: ['./user-games.component.css']
})
export class UserGamesComponent implements OnInit {

  gameslist: GamesList;
  errors: string;

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.currentGamesList.subscribe(result => {
      this.gameslist = result;
      console.log(this.gameslist);
    },
      error => {
        this.errors = error
      }
    );
  }
  ngOnDestroy() {
  }

}
