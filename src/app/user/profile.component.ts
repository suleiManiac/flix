import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

    ngOnInit() {
        let firstname = new FormControl();
        let lastname = new FormControl();
        this.profileForm = new FormGroup({
            firstname,
            lastname
        });
    }

}
