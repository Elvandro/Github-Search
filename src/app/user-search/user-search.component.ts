import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  username:string

  @Output() user = new EventEmitter<any>()

  obtainUser(){
    console.log(this.username);
    this.user.emit(this.username);
    this.username = "";
  }
  constructor() { }

  ngOnInit() {
  }

}
