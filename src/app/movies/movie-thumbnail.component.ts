import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'movie-thumbnail',
    template: `
    <div class="col-md-12">
    <div class="card mb-4 shadow-sm">
      <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="{{movie.imageUrl}}">
      <div class="card-body">
        <p class="card-text"> Title: {{ movie.title}} </p>
        <p class="card-text"> Release Date: {{ movie.date }} </p>
        <p class="card-text"> Rating: {{ movie.rating }} </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" (click)="handleClick()">Favorite</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
})
export class MovieThumbnailComponent {
    @Input() movie: any;
    @Output() favMovie = new EventEmitter();
    // tslint:disable-next-line: no-trailing-whitespace
    
    handleClick() {
        this.favMovie.emit(this.movie);
    }
}
