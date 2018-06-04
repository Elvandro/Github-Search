import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { RepoDisplayComponent } from './repo-display/repo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserDisplayComponent,
    RepoDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
