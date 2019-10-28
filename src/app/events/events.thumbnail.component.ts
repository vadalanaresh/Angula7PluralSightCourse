import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "events-thumbnail",
    template: `
     <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngSwitch] = "event?.time" >Time: {{event?.time}}
            <span *ngSwitchCase = "'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase = "'9:00 am'">(Normal Start)</span>
            <span *ngSwitchCase = "'10:00 am'">(Late Start)</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class = "pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            <span>Online url:{{event?.onlineUrl}}</span>
        </div>
    </div>
    `,
    styles: [`
    .thumbnail { min-height: 210px }
    .pad-left {margin-left:10px}
    .well div { color: #bbb }
    `]
})
export class EventsThumbnail {
    @Input() event?: any;
}