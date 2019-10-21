import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
    movies: any[] = [
        {
            id: 1,
            title: 'A Million Ways To Die in the West',
            cast: {
                first: 'Seth McFarlane',
                second: 'Someone Someone',
                third: 'Someone Something'
            },
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 2,
            title: 'A Million Ways To Die in the West',
            cast: {
                first: 'Seth McFarlaness',
                second: 'Someone Someone',
                third: 'Someone Something'
            },
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 3,
            title: 'A Million Ways To Die in the West',
            cast: {
                first: 'Seth McFarlane',
                second: 'Someone Someone',
                third: 'Someone Something'
            },
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 4,
            title: 'A Million Ways To Die in the West',
            cast: {
                first: 'Seth McFarlane',
                second: 'Someone Someone',
                third: 'Someone Something'
            },
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 5,
            title: 'A Million Ways To Die in the West',
            cast: {
                first: 'Seth McFarlane',
                second: 'Someone Someone',
                third: 'Someone Something'
            },
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 6,
            title: 'A Million Ways To Die in the West',
            cast: {
                first: 'Seth McFarlane',
                second: 'Someone Someone',
                third: 'Someone Something'
            },
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        },
        {
            id: 7,
            title: 'A Million Ways To Die in the West',
            cast: {
                first: 'Seth McFarlane',
                second: 'Someone Someone',
                third: 'Someone Something'
            },
            date: '12/12/12',
            rating: 5,
            imageUrl: '../assets/logo.png'
        }
    ];

    getMovies() {
        // tslint:disable-next-line: no-use-before-declare
        return this.movies;
    }

    getMovie(id: number) {
        return this.movies.find(movie => movie.id === id);
    }
}
