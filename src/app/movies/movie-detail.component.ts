import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './movie-detail.component.html',
    styles: [`
        .container {
            padding-top: 100px;
        }
    `]
})
export class MovieDetailComponent implements OnInit {
    movie: any;
    constructor(private movieService: MovieService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.movie = this.movieService.getMovie(+this.route.snapshot.params.id);
    }
}
