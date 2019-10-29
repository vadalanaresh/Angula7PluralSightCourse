import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnail } from './events/events.thumbnail.component';
import { navbarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service'
import { ToastrService } from 'src/common/toastrService';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnail,
    navbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
