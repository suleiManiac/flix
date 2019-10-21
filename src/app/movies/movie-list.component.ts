import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/movie.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Movie List';
    movies: any[];
    constructor(private movieService: MovieService) {

    }

    ngOnInit() {
        this.movies = this.movieService.getMovies();
    }

    handleMovieFav(data) {
        console.log(data);
    }
}
