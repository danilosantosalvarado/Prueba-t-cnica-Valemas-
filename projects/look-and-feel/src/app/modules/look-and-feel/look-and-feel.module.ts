import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LookAndFeelRoutingModule } from './look-and-feel-routing.module';
import { SystemDesignComponent } from './system-design/system-design.component';
import { SidebarComponent } from './system-design/sidebar/sidebar.component';
import { ColorSettingsComponentComponent } from './system-design/color-settings-component/color-settings-component.component'



@NgModule({
  declarations: [
    SystemDesignComponent,
    SidebarComponent,
    ColorSettingsComponentComponent
  ],
  imports: [
    CommonModule,
    LookAndFeelRoutingModule,
    FormsModule,
  ]
})
export class LookAndFeelModule { }
