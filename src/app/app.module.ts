import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MovieService } from './movies/shared/movie.service';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    NavbarComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
