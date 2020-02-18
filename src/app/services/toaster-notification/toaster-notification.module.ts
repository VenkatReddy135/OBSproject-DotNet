import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToasterNotificationRoutingModule } from './toaster-notification-routing.module';
import { ToasterNotificationComponent } from './toaster-notification.component';


@NgModule({
  declarations: [ToasterNotificationComponent],
  imports: [
    CommonModule,
    ToasterNotificationRoutingModule
  ]
})
export class ToasterNotificationModule { }
