import { Component , Input } from '@angular/core';

@Component({
  selector: 'display-error-messages',
  templateUrl: './display-error-messages.component.html',
  styleUrls: ['./display-error-messages.component.css']
})

export class DisplayErrorMessagesComponent {

  constructor() {

    this.messages = null;
    this.display = false;

   }

   public display: boolean;

   @Input() public messages: string[] | null;
  
}
