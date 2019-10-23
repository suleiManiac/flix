import { Component } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './navbar.component.html',
    styles: [`
        #searchForm{ margin-right: 200px;}
        li > a.active{ color: green;}
    `]
})
export class NavbarComponent {
    constructor(private authService: AuthService) {}
}
