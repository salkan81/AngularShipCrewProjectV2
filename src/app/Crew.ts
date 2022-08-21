export interface Certificate{
    name:string,
    date:string

}
export class Crew
{
    constructor(id:number,firstName:string,lastName:string,nationality:string,title:string,certificates:Certificate[]){
        this.Id =id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Nationality = nationality;
        this.Title = title;
        this.Certificates=certificates
    }

    Id:number;
    FirstName:string;
    LastName:string;
    Nationality:string;
    Title:string;
    Certificates:Certificate[]
}