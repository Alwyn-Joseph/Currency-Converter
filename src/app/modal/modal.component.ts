import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() content: string='';

  @Output() okBtnPressed = new EventEmitter<void>();

  close() {
    this.okBtnPressed.emit();
  }
}
