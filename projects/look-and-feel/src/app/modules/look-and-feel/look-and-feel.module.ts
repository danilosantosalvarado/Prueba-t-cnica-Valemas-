import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookAndFeelRoutingModule } from './look-and-feel-routing.module';
import { SystemDesignComponent } from './system-design/system-design.component';
import { SidebarComponent } from './system-design/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SystemDesignComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LookAndFeelRoutingModule
  ]
})
export class LookAndFeelModule { }
