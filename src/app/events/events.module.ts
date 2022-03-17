import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api/api.module';
import { EventsComponent } from './events.component';
import { EventCollectionComponent } from './event-collection/event-collection.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    ApiModule
  ],
  declarations: [
    EventsComponent, 
    EventCollectionComponent, EventDetailComponent
  ],
  exports: [
    EventCollectionComponent // TODO: for now, remove it later!
  ]
})
export class EventsModule { }