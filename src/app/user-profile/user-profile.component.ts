import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../search/user';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  errors: string;
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.currentUser.subscribe(result => {
      this.user = result;
      console.log(this.user);
    },
      error => {
        this.errors = error
      }
    );
  }
  ngOnDestroy() {
  }

}
