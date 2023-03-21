interface savings1{
    acconumber:number;
    accotype:string;
    balance1(amt?:any,interest?:any): void;
}
interface current1{
    acconumber:number;
    accotype:string;
    balance1(amt?:any,interest?:any): void;
}
class acount implements savings1,current1{
    acconumber: number;
    accotype:string;
    constructor(acconumber:number,accotype:string){
        this.acconumber=acconumber;
        this.accotype=accotype;
    }
    balance1(amt?:any,interest?:any){
        console.log("account number is :"+ this.acconumber)
        console.log("account type is :"+ this.accotype)
        if (interest != null) {
            console.log("saving acc balance is : ", amt+ (amt* interest));
        }
        else{
            console.log("Current acc balance is:"+amt)
        }
       
    }
}
let y:savings1 = new acount(12,'harishmitha');
y.balance1(25000, 2);
let q:current1 = new acount(13,'haritha');
q.balance1(30000);