import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';
import {LoveComponent} from './love.component';

@Component( {
    selector: 'my-app',
    directives: [TweetComponent, LoveComponent],
    styles: [`
             .fisk {
                 height: 100%;
                 width: 100%;
                 background-image: url('http://lorempixel.com/1920/1100');
                 background-attachment: fixed;
                 background-color: red;
                 }
             
    `],
    template: `
    <div class="fisk">
        <tweet [post]="post" ></tweet>
        <love [inLove]="true" [lovers]=23></love>
    </div>
    `
})
export class AppComponent {
    post = {
        lovers: 500,
        author: "Preben",
        text: "more will come later",
        imgURL: "http://lorempixel.com/100/100/people"
    }
}