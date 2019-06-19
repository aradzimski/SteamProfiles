import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService } from '../http.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
    searchForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private service: HttpService
        ) { }

    ngOnInit(){
        this.searchForm = this.formBuilder.group({
            Searchbar: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]]
        });
    }

    onSubmit(): void {
        if (this.searchForm.valid) {
            this.service.getUserGames(this.searchForm.get("Searchbar").value).toPromise().then(response => {
                console.log(response);
            })
            this.service.getUser(this.searchForm.get("Searchbar").value).toPromise().then(response => {
                console.log(response);
            })
          }
          else {
            console.log("Invalid Steam user ID.");
            return;
          }
    }
}