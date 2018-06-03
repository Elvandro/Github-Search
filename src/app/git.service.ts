import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { User } from './user';
import { Repository } from "./repository";

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor() { }
}
