import {Component} from 'angular2/core';
import {SubscribeFormComponent} from './subscribe-form.component'

@Component( {
    selector: 'my-app',
    directives: [SubscribeFormComponent],
    template: `
    <subscribe-form></subscribe-form>
    `
})
export class AppComponent {
    
}