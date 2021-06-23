// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
// }

import { Component } from "@angular/core";
@Component({
  selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor() {
    
    this.name = `Arvinmoj`;
    this.number1 = 2000;
    this.number2 = 2000;


    this.fullNames =[];
    this.fullNames.push(`Ali`);
    this.fullNames.push('Pouria');
    this.fullNames.push('Shervin');
    this.fullNames.push(`Arvinmoj`);

    this.usernames=[`Username`];
    this.usernameCount = 10;
    for (let index: number = 0; index < this.usernameCount; index++) {
      this.usernames.push(`Username`+ " " + index)
    }

    this.display = false;
    this.hide = true;

  }

  public name: string;

  public number1: number;
  public number2: number;
  
  public fullNames: string[];
  public usernames: string[];
  
  public usernameCount: number;

  public display: boolean;
  public hide: boolean;

}