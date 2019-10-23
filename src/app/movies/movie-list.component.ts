import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/movie.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movie-list.component.html',
    styles: [`
        .container {
            padding-top: 40px;
        }
    `]
})
export class MovieListComponent implements OnInit {
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Movie List';
    movies: any;
    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this.movieService.getMovies().subscribe(movies => { this.movies = movies; });
    }

    handleMovieFav(data) {
        console.log(data);
    }
}
