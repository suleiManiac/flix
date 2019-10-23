import { Component } from '@angular/core';

@Component({
    template: `
        <div class="container">
            <h1>{{ pageTitle }}</h1>
            <hr>
            <div class = "col-md-6">
                <h3>[Profile Edit Form Goes Here]</h3>
                <br><br>
                <button type="submit" class="btn btn-primary" id="saveBtn">Save</button>
                <button type="button" class="btn btn-secondary">Cancel</button>
            </div>
        </div>
      `,
    styles: [`
        .container {padding-top: 100px;}
        #saveBtn {padding-rigth: 10px;}
    `]
})
export class ProfileComponent {
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Edit Your Profile';
}
