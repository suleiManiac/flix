import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
        .container {padding-top: 100px;}
        #saveBtn {padding-rigth: 10px;}
    `]
})
export class ProfileComponent implements OnInit{
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Edit Your Profile';
    profileForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        let firstName = new FormControl(this.authService.currentUser.firstName);
        let lastName = new FormControl(this.authService.currentUser.lastName);
        this.profileForm = new FormGroup({
            firstName,
            lastName
        });
    }

    saveProfile(formValues) {
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['movies']);
    }

    cancel() {
        this.router.navigate(['movies']);
    }

}
