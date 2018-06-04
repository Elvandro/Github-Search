import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service'
import { User } from '../user'
import { Repository } from '../repository'

@Component({
  selector: 'app-repo-display',
  templateUrl: './repo-display.component.html',
  styleUrls: ['./repo-display.component.css']
})
export class RepoDisplayComponent implements OnInit {

  repos: Repository

  SearchTerm(identity){

    //console.log(identity);
    this.reposRequest(identity);
  }
  reposRequest(identity){
    this.gitService.repoRequest(identity);
  }

  constructor(private gitService:GitService) { }

  ngOnInit() {

    this.repos=this.gitService.repos;

  }

}
