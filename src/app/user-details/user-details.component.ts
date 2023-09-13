import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userId: string = '';
  userLogin: string = '';
  userData: any;

  constructor(public bsModalRef: BsModalRef, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`https://api.github.com/users/${this.userLogin}`)
      .subscribe((data: any) => {
        this.userData = data;
      });
  }
}
