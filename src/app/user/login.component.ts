import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        .container {
            padding-top: 100px;
        }

        /**em {
            font-size: 0.7rem !important;
        }**/
    `]
})
export class LoginComponent {
    username;
    password;
    constructor(private authService: AuthService, private router: Router) {}

    login(formValues) {
        // console.log(formValues.username);
        this.authService.loginUser(formValues.username, formValues.password);
        this.router.navigate(['movies']);
    }

    cancel() {
        this.router.navigate(['movies']);
    }
}
