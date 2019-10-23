import { Component } from "@angular/core"

@Component({
    selector: "events-list",
    templateUrl: "/events.list.html"
})
export class EventsListComponent {
    events = {
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