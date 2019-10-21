import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/movie.service'; 

@Component({
    templateUrl: '../movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
    movie: any;
    constructor(private movieService: MovieService) {

    }
    ngOnInit() {
        this.movie = this.movieService.getMovie(1);
    }
}
