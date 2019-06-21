import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchForm: FormGroup;
    user: User;
    constructor(
        private formBuilder: FormBuilder,
        private service: HttpService,
        private router: Router,
        private data: DataService
    ) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            Searchbar: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]]
        });
    }

    onSubmit(): void {

        if (this.searchForm.valid) {
            this.service.getUserGames(this.searchForm.get("Searchbar").value).toPromise().then(response => {

            })
            this.service.getUser(this.searchForm.get("Searchbar").value).toPromise().then(response => {
              Object.assign(this.user = new User(), response.response.players[0]); 
              this.data.changeUser(this.user);
            })
        }
        else {
            console.log("Invalid Steam user ID.");
            return;
        }
    }
}