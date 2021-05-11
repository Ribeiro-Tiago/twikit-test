import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
