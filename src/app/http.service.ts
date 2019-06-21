import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamesList } from './search/games-list'

interface ResponseObj {
    players: any[];
}

interface UserResponse {
    response: ResponseObj;
}

interface GamesResponse {
    response: GamesList;
}

@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient
        ) {
    }

    getUser(id): Observable<UserResponse> {
        return this.http.get<UserResponse>(
            'http://localhost:4000/server/user/' + id
        );
    }
    getUserGames(id): Observable<GamesResponse> {
        return this.http.get<GamesResponse>(
            'http://localhost:4000/server/user/games/' + id
        );
    }
}