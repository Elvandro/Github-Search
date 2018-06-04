import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service'
import { User } from '../user'
import { Repository } from '..repository'

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  profiles:User;
  repos:Repository;
  users:any;
  results:any

  SearchTerm(identity){

    console.log(identity);
    this.GitService.userRequest(identity);
  }
  userRequest(identity){
    this.GitService.userRequest(identity);
  }

  constructor(private GitService:GitService) {
  }

  ngOnInit() {

    this.profiles=this.GitService.profiles;
  }

}
