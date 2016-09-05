import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html'
    ,
    styles:[`
    .glyphicon-star-empty {
        color: #cba;
        cursor: pointer;
    }
    .glyphicon-star {
        color: orange;
        cursor: pointer;
    }
    `
    ],
    inputs: ['isFavorite']
})

export class FavoriteComponent{
    isFavorite = false; 
    @Output() change = new EventEmitter();

    onDims() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}