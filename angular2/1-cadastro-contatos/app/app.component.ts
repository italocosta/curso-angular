import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
        <h1>My Firts Angular 2 App</h1>

        <router-outlet></router-outlet>
    `
})
export class AppComponent {

}


// <my-app><my-app>