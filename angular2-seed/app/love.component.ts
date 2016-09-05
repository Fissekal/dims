import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'love',
    template: `
        <i
        class="glyphicon glyphicon-heart"
        [class.rth] = "inLove"
        (click)="cupidStrike()"> </i>
        <span class="amountOfLovers"> {{lovers}} </span>
    `,
    styles:[`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .rth {
        color: deeppink;
        }
    `],
    inputs: ['inLove', 'lovers']
})
export class LoveComponent {
    inLove = false;
    lovers = 0;
    cupidStrike() {
        this.lovers = this.inLove? this.lovers=this.lovers-1:this.lovers=this.lovers+1;
        this.inLove = !this.inLove
    }
}