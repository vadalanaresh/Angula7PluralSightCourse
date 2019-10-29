import { Component, OnInit } from "@angular/core";
import { navbarComponent } from "../nav/navbar.component";
import { EventService } from '../shared/event.service';
import { ToastrService } from 'src/common/toastrService';

@Component({
    selector: "events-list",
    template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <nav-bar></nav-bar>
        <div class="row">
            <div *ngFor = "let eventVariable of events" class="col-md-5">
                <events-thumbnail (click)="handleEventThumbnailClick(eventVariable.name)" [event] = "eventVariable"></events-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any[]
    constructor(private eventService: EventService, private toastrService: ToastrService) {
    }
    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }
    handleEventThumbnailClick(eventName) {
        this.toastrService.success(eventName)
    }
}