import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
    searchForm: FormGroup;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(){
        this.searchForm = this.formBuilder.group({
            Searchbar: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]]
        });
    }

    onSubmit(): void {
        if (this.searchForm.valid) {
            console.log(this.searchForm.get("Searchbar").value);
          }
          else {
            console.log("Invalid form!");
            return;
          }
    }
}
    