import { Component } from "@angular/core"

@Component({
    selector: "events-list",
    template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <events-thumbnail [event] = "eventVariable"></events-thumbnail>
    </div>
    `
})
export class EventsListComponent {
    eventVariable = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: 'assets/basic-shield.ts',
        location: {
            address: 'Kapil towers',
            city: 'Hyderabad',
            country: 'India'
        }
    }
}