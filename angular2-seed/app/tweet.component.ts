import {Component} from 'angular2/core'
import {LoveComponent} from './love.component'

@Component ({
    selector: 'tweet',
    template:`
    <div>
    <img src={{post.imgURL}} align="left"> {{post.author}}<br> {{post.text}}<br>
    <love [inLove] = "post.inLove" [lovers] = "post.lovers"></love><br></div>
    `,
    directives: [LoveComponent],
    inputs: ['post']
})

export class TweetComponent {
    
}