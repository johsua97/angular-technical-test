import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  searchText: string = '';
  userData: any;

  constructor(private http: HttpClient) { }

   searchUser() {
    if (this.searchText) {
      this.http.get(`https://api.github.com/search/users?q=${this.searchText}`)
        .subscribe((data) => {
          this.userData =  data;
          console.log('userData:', this.userData);
        });
    }
  }

}
