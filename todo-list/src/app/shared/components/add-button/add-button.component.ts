import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  constructor() {}

  @Input() message: string = '';
  @Output() pressed = new EventEmitter();

  ngOnInit(): void {}

  buttonPressed($event: any) {
    console.log(this.message);
    this.pressed.emit();
  }
}
