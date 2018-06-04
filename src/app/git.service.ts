import { Injectable } from '@angular/core';
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
    this.profiles = new User("","","","",new Date());
    this.repos = new Repository("","","",new Date());
   }

   userRequest(profile:string){
     interface ApiResponse{
       userName:string;
       bio:any;
       public_repos:number;
       repo_url:any;
       dateCreated:Date
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl+profile+environment.KEY).toPromise().then(
         res=>{
           this.profiles.bio = res.bio;
           this.profiles.dateCreated = res.dateCreated;
           console.log(this.profiles.dateCreated);

           this.profiles.userName = res.userName;
           this.profiles.public_repos = res.public_repos;
           this.profiles.repo_url = res.repo_url;
           console.log(this.profiles.userName)
         }
       );
     });
     return promise;
   }
  repoRequest(profile:string){
    interface Repositories{
      name:string;
      repo_url:any;
      description:any;
      dateCreated:Date
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<Repositories>(environment.apiUrl+profile+'/repos'+environment.Key).toPromise().then(
        res=>{
          this.results = res;
          this.repos.repo_url = res.repos_url;
          this.repos.description = res.description;
          this.repos.dateCreated = res.dateCreated;

          resolve();
        }
      );
    });
    return promise;
  }
}
