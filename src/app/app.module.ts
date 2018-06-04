import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule,Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { GitService } from './git.service'
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { RepoDisplayComponent } from './repo-display/repo-display.component';

const appRouting:Routes=[
  {
    path:'',component:UserDisplayComponent
  },
  {
    path:'',component:RepoDisplayComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserDisplayComponent,
    RepoDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
