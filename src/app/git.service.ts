import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { User } from './user';
import { Repository } from "./repository";

@Injectable({
  providedIn: 'root'
})
export class GitService {

  profiles:User;
  repos:Repository;
  users:any;
  results:any

  constructor(private http:HttpClient) {
    this.profiles = new User("","","",new Date());
    this.repos = new Repository("","","",new Date());
   }

   userRequest(identity:string){
     interface ApiResponse{
       userName:string;
       userEmail_url:any;
       public_repos:number;
       dateCreated:Date
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl+identity+environment.KEY).toPromise().then(
         res=>{
           this.profiles.userName = res.userName;
           this.profiles.public_repos = res.public_repos;
           console.log(this.profiles.userName)

           this.profiles.userEmail = res.userEmail;
           this.profiles.dateCreated = res.dateCreated;
           console.log(this.profiles.dateCreated);

         }
       );
     });
     return promise;
   }
  repoRequest(identity:string){
    interface Repositories{
      name:string;
      repo_url:any;
      description:any;
      dateCreated:Date
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<Repositories>(environment.apiUrl+identity+'/repos'+environment.KEY).toPromise().then(
        res=>{
          this.results = res;
          this.repos.repo_url = res.repo_url;
          this.repos.description = res.description;
          this.repos.dateCreated = res.dateCreated;

          resolve();
        }
      );
    });
    return promise;
  }
}
