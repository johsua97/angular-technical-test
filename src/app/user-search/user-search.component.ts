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
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalUsers: number = 0;
  loading: boolean = false;


  constructor(private http: HttpClient) { }

   searchUser() {
    if (this.searchText) {
      this.http.get(`https://api.github.com/search/users?q=${this.searchText}&page=${this.currentPage}&per_page=${this.itemsPerPage}`)
        .subscribe((data) => {
          this.userData = data;
          this.totalUsers = this.userData.total_count;
        });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchUser();
    }
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.totalUsers) {
      this.currentPage++;
      this.searchUser();
    }
  }

}
