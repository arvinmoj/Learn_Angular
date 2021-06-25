import * as InterfaceCountries from '../interfaces/country'

export class Country implements InterfaceCountries.Country{

    public constructor (id: number , name: string , phoneCode: number) {

            this.id = id;
            this.name = name;
            this.phoneCode = phoneCode;

    }

    public id: number;
    public name: string;
    public phoneCode: number;
    
}