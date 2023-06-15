export class User{
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: string;
    city: string;

    constructor(obj?:any){
        this.firstName = obj ? obj.firstName : null;
        this.lastName = obj ? obj.lastName : null;
        this.birthDate = obj ? obj.birthDate : null;
        this.street = obj ? obj.street : null;
        this.zipCode = obj ? obj.zipCode : null;
        this.city = obj ? obj.city : null;
    }

    public toJson(){
        return{
                firstName: this.firstName,
                lastName: this.lastName,
                street: this.street,
                birthDate: this.birthDate,
                city: this.city,
                zipCode: this.zipCode,
        }
    }
}