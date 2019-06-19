import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {

    }
    getUser(id): Observable<any[]> {
        return this.http.get<any[]>(
            'http://localhost:4000/server/user/' + id
        );
    }
    getUserGames(id): Observable<any[]> {
        return this.http.get<any[]>(
            'http://localhost:4000/server/user/games/' + id
        );
    }
}