import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
        .container {padding-top: 100px;}
        #saveBtn {padding-rigth: 10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placehoder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placholder {color: #999;}
        .error :ms-input-placholder {color: #999;}
    `]
})
export class ProfileComponent implements OnInit{
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Edit Your Profile';
    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['movies']);
        }
    }


    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }

    cancel() {
        this.router.navigate(['movies']);
    }

}
