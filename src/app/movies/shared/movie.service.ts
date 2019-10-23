import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    // private REST_API_SERVER = 'http://localhost:3000';
    movies: IMovie[] = [
        {
            id: 1,
            title: 'A Million Ways To Die in the West',
            cast: [
                'Seth McFarlane',
                'Someone Someone',
                'Someone Something'
            ],
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 2,
            title: 'A Million Ways To Die in the West',
            cast: [
                'Seth McFarlane',
                'Someone Someone',
                'Someone Something'
            ],
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 3,
            title: 'A Million Ways To Die in the West',
            cast: [
                'Seth McFarlane',
                'Someone Someone',
                'Someone Something'
            ],
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 4,
            title: 'A Million Ways To Die in the West',
            cast: [
                'Seth McFarlane',
                'Someone Someone',
                'Someone Something'
            ],
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 5,
            title: 'A Million Ways To Die in the West',
            cast: [
                'Seth McFarlane',
                'Someone Someone',
                'Someone Something'
            ],
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 6,
            title: 'A Million Ways To Die in the West',
            cast: [
                'Seth McFarlane',
                'Someone Someone',
                'Someone Something'
            ],
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 7,
            title: 'A Million Ways To Die in the West',
            cast: [
                'Seth McFarlane',
                'Someone Someone',
                'Someone Something'
            ],
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        }
    ];
    /* constructor(private httpClient: HttpClient) {}

    public sendGetRequest() {
       return this.httpClient.get(this.REST_API_SERVER);
    }
 */
    getMovies(): Observable<IMovie[]> {
        // tslint:disable-next-line: no-use-before-declare
        // tslint:disable-next-line: prefer-const
        let subject = new Subject<IMovie[]>();
        setTimeout(() => { subject.next(this.movies); subject.complete(); },
        100);
        return subject;
    }

    getMovie(id: number): IMovie {
        return this.movies.find(movie => movie.id === id);
    }
}
