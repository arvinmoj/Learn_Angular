import * as InterfacePersons from '../interfaces/person';

export class Person implements InterfacePersons.Person {

    public constructor(id: string , age: number , active: boolean , fullName: string , emailAddress: string) {
        this.id = id;
        this.age = age;
        this.active = active;
        this.fullName = fullName;
        this.emailAddress = emailAddress;
     }

    public id: string;
    public age: number;
    public active: boolean;
    public fullName: string;
    public emailAddress: string;

}