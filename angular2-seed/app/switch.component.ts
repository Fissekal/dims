import {Component} from 'angular2/core'

@Component({
    selector: 'switch',
    template:`
    <ul class="nav nav-pills">
        <li><a (click)="viewMode = 'map'">Map View</a></li>
        <li><a (click)="viewMode='list'">List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content comes later</template>
        <template [ngSwitchWhen]="'list'">Not yet implemented</template>
    </div>
    `
})
export class SwitchComponent {
    
}