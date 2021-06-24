import * as InterfaceCars from '../interfaces/car'

export class Car implements InterfaceCars.Car
{
    public constructor(name: string , years:number , color: string , codeNumber: number){

        this.name = name;
        this.color = color;
        this.years = years;
        this.codeNumber = codeNumber

    }

    public name: string;
    public color: string;
    public years: number;
    public codeNumber: number;

}