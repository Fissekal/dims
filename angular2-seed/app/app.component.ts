import {Component} from 'angular2/core';
import {SubscribeFormComponent} from './subscribe-form.component'
import {AlbumsComponent} from './albums.component';
import {ContactComponent} from './contact.component';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    { path: '/contact', name: 'Contact', component: ContactComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])

@Component( {
    selector: 'my-app',
    directives: [RouterOutlet],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    
}