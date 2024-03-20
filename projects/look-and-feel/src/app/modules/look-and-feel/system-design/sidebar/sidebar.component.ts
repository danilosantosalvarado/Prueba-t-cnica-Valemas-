import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isExpanded: boolean = false;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  handleSidebarToggle() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}
