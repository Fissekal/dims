import {Component} from 'angular2/core';

@Component({
    selector: 'zipper',
    styles: [`
             .zippy {
                 border: 1px solid #ccc;
                 border-radius: 2px;
             }
             .zippy .zippy-title {
                 padding: 20px;
                 font-weight: bold;
             }
             .zippy .zippy:hover {
                 background: #f0f0f0;
                 cursor: pointer;
             }
             .zippy .zippy-content {
                 padding: 20px;
             }
    `],
    template: `
        <div class="zippy">
            <div class="zippy-title"
                (click)="toggle()">
                {{ post }}
                <i
                    class="pull-right glyphicon"
                    [ngClass]="{
                        'glyphicon-chevron-down': !isExpanded,
                        'glyphicon-chevron-up': isExpanded}">
                </i>
            </div>
            <div *ngIf="isExpanded" class="zippy-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    inputs: ['post']
    
}) export class ZippyComponent {
    isExpanded = false;
    
    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}