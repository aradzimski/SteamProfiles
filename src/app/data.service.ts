import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './search/user';


@Injectable()
export class DataService {

    public test = 1;
    private userSource = new BehaviorSubject<User>(null)
    currentUser = this.userSource.asObservable();

    constructor() { }

    changeUser(user: User): Observable<User>
    {
        this.userSource.next(user);
        this.test += 2;

        return this.currentUser;
    }
}