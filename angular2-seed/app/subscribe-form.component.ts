import {Component} from 'angular2/core'

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/subscribe-form.html'
})
export class SubscribeFormComponent {
    onSubscribe(form) {
        console.log(form);
    }
}