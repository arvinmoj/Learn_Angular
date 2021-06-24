// Component (Angular/Core)
import { Component } from '@angular/core';

// Interfaces
import * as InterfaceCars from './interfaces/car';
import * as InterfaceUsers from './interfaces/user';
import * as InterfacePersons from './interfaces/person';

// Models
import * as ModelCars from './models/car';
import * as ModelUsers from './models/user';
import * as ModelPersons from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public constructor() {

    this.name = `Arvinmoj`;
    this.number1 = 2000;
    this.number2 = 2000;

    this.fullNames = [];
    this.fullNames.push(`Ali`);
    this.fullNames.push('Pouria');
    this.fullNames.push('Shervin');
    this.fullNames.push(`Arvinmoj`);

    this.usernames = [`Username`];
    this.usernameCount = 10;

    for (let index: number = 0; index < this.usernameCount; index++) {
      this.usernames.push(`Username` + ' ' + index);
    }

    this.display = false;
    this.hide = true;

    this.person = new ModelPersons.Person(
      '87B69FC999A0',
      20,
      true,
      'Arvinmoj',
      'Arvinmoj@hotmail.com'
    );

    this.person.age = 20;
    this.person.fullName = "Arvinmoj"
    this.person.active = true;
    this.person.emailAddress = "arivnmoj@hotmail.com";
    this.person.id = "526AC868-CB56-4BAD-BF19-87B69FC999A0";

    this.user = [
      new ModelUsers.User('Arvinmoj', '!1q2w3e!'),
      new ModelUsers.User('shervin', 'sErVin'),
    ];

    this.car = [];
    for (let index: number = 0; index < 20; index++) {
      this.car.push(new ModelCars.Car('BMW', 2000, 'Black', index + 1));
    }

  }

  public name: string;

  public number1: number;
  public number2: number;

  public fullNames: string[];
  public usernames: string[];

  public usernameCount: number;

  public hide: boolean;
  public display: boolean;

  public car: InterfaceCars.Car[];
  public user: InterfaceUsers.User[];
  public person: InterfacePersons.Person;

  public onClick(): void {
    alert('Hello Arvinmoj');
  }

  public details(cars: InterfaceCars.Car): void {

    let message: string = 'Name : ' + cars.name + ' | ' +
      'Color : ' + cars.color + ' | ' +
      'Years : ' + cars.years + ' | ' +
      'CodeNumber : ' + cars.codeNumber;

    this.detailsMessage(message);

  }

  public detailsMessage(message: string): void {

    let myContainer = <HTMLElement>document.getElementById('div');
    myContainer.innerHTML = message;

  }

}