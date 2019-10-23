import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        .container {
            padding-top: 100px;
        }
    `]
})
export class LoginComponent {
    username;
    password;
    constructor(private authService: AuthService, private router: Router) {}

    login(formValues) {
        this.authService.loginUser(formValues.username, formValues.password);
        this.router.navigate(['movies']);
    }

    cancel() {
        this.router.navigate(['movies']);
    }
}
