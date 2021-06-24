import * as InterfaceUsers from '../interfaces/user';

export class User implements InterfaceUsers.User {

    public constructor(username: string , password: string){

        this.username = username;
        this.password = password;
    }

    public username: string;
    public password: string;
    
}