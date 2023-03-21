abstract  class customer {
   public customername: string;
    public age: number;
    public address: string;
  public contactnumber: number;
    constructor(customername: string,age:number,address:string,contactnumber:number){
        this.customername=customername;
        this.age=age;
        this.address=address;
        this.contactnumber=contactnumber;
    }

public abstract display():any;

}
class loan extends customer{
    loanaccnumber:number;
    loantype:string;
    loanamt:number;
    duration:string;
    interestrate:number;
    constructor(customername: string,age:number,address:string,contactnumber:number,loanaccnumber:number,loantype:string,loanamt:number,duration:string,interestrate:number){
     super(customername,age,address,contactnumber);
        this.loanaccnumber=loanaccnumber;
        this.loantype=loantype;
        this.loanamt=loanamt;
        this.duration=duration;
        this.interestrate=interestrate;
    }
     accessdetails(): any{
     
       console.log("customername is :"+this.customername+"age is :"+this.age+"address is :"+this.address+"contact number is:"+this.contactnumber+"loan account number is :"+this.loanaccnumber+"loan type is :"+this.loantype+"loan amount is :"+this.loanamt+"duration is :"+this.duration+"interest rate is :"+this.interestrate)

    }
    interestcalculate():any{
        let a=this.loanamt*this.interestrate
        console.log("the amount is :"+a)
    }
    display() : any{
     this.accessdetails();
     this.interestcalculate();

    }
}

let x=new loan('harishmitha',19,'coimbatore',99945,451,'educational',450000,'five years',3)

x.display();


