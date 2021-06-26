import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-error-message',
  templateUrl: './display-error-message.component.html',
  styleUrls: ['./display-error-message.component.css']
})

export class DisplayErrorMessageComponent  {

  constructor() {

    this.message = null;

  }

  @Input() public message: string | null;

}
