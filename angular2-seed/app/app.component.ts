import {Component} from 'angular2/core';
import {SubscribeFormComponent} from './subscribe-form.component'
import {AlbumsComponent} from './albums.component';
import {CinemaComponent} from './cinema.component';
import {ContactComponent} from './contact.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    { path: '/contact', name: 'Contact', component: ContactComponent},
    { path: '/cinema', name: 'Video', component: CinemaComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])

@Component( {
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    
}