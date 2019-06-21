import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './search/user';
import { GamesList } from './search/games-list';


@Injectable()
export class DataService {

    private userSource = new BehaviorSubject<User>(null);
    currentUser = this.userSource.asObservable();

    private gameslistSource = new BehaviorSubject<GamesList>(null);
    currentGamesList = this.gameslistSource.asObservable();

    constructor() { }

    changeUser(user: User): Observable<User>
    {
        this.userSource.next(user);
        return this.currentUser;
    }

    changeGamesList(gameslist: GamesList): Observable<GamesList>
    {
        this.gameslistSource.next(gameslist);
        return this.currentGamesList;
    }
}