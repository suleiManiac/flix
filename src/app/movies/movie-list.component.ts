import { Component } from '@angular/core';

@Component({
    selector: 'app-movies',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Movie List';
    movies = [
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
        }
    ];
    handleMovieFav(data) {
        console.log(data);
    }
}
