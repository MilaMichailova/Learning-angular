import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.scss'],
})
export class RemoveButtonComponent implements OnInit {
  constructor() {}

  @Input() message: string = '';
  @Output() pressed = new EventEmitter();

  ngOnInit(): void {}

  buttonPressed($event: any) {
    console.log(this.message);
    this.pressed.emit();
  }
}
