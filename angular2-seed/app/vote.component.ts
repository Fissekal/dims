import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'trump',
    templateUrl: 'app/vote.template.html',
    styles:[`
    .wwThree {
        width: 23;
        text-align: center;
        color: #ccc;
    }
        .arrow {
            cursor: pointer;
        }
        .voted {
            color: orange;
        }
    `],
    inputs: ['votes']
})
export class VoteComponent {
    myVote = 0;
    votes = 0;
    upGoesTrump() {
        if(this.myVote < 1) {
        this.myVote++;
        this.votes++;
        console.log(this.myVote);
    }
    }
    downGoesTrump(){
        if(this.myVote > -1) {
        this.myVote--;
        this.votes--;
        console.log(this.myVote);
    }
}
}