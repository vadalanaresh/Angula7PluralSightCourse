import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnail } from './events/events.thumbnail.component'
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnail
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
