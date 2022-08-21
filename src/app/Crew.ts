export interface Certificate{
    name:string,
    date:string

}
export class Crew
{
    constructor(id:number,firstName:string,lastName:string,nationality:string,title:string,daysOnBoard:number,dailyRate:number,currency:string,totalIncome:number,certificates:Certificate[]){
        this.Id =id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Nationality = nationality;
        this.Title = title;
        this.DaysOnBoard=daysOnBoard;
        this.DailyRate=dailyRate;
        this.Currency=currency;
        this.TotalIncome =totalIncome;
        this.Certificates=certificates
    }

    Id:number;
    FirstName:string;
    LastName:string;
    Nationality:string;
    Title:string;
    DaysOnBoard:number;
    DailyRate:number;
    Currency:string;
    TotalIncome:number;
    Certificates:Certificate[]
}