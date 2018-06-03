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
         }
       )
     })
   }
}
