import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'movie-thumbnail',
    template: `
    <div class="container movie-thumbnail">
    <div class="card mb-4 shadow-sm">
      <a  [routerLink]="['/movies', movie.id]"><img class="bd-placeholder-img card-img-top thumbnail" width="100%" height="225"
       [src]="movie.imageUrl"></a>
      <div class="card-body">
        <p class="card-text"> Title: {{ movie.title}} </p>
        <p class="card-text"> Release Date: {{ movie.date }} </p>
        <p class="card-text"> Rating: {{ movie.rating }} </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-primary" (click)="handleClick()">Favorite</button>
            <button type="button" class="btn btn-sm btn-outline-primary" [routerLink]="['/movies', movie.id]">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `,
  styles: [
    '.movie-thumbnail{ min-height: 210px;}'
  ]
})
export class MovieThumbnailComponent {
    @Input() movie: any;
    @Output() favMovie = new EventEmitter();
    // tslint:disable-next-line: no-trailing-whitespace
    
    handleClick() {
        this.favMovie.emit(this.movie);
    }
}
