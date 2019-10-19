import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
