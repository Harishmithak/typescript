"use strict";
class customer {
    constructor(customername, age, address, contactnumber) {
        this.customername = customername;
        this.age = age;
        this.address = address;
        this.contactnumber = contactnumber;
    }
}
class loan extends customer {
    constructor(customername, age, address, contactnumber, loanaccnumber, loantype, loanamt, duration, interestrate) {
        super(customername, age, address, contactnumber);
        this.loanaccnumber = loanaccnumber;
        this.loantype = loantype;
        this.loanamt = loanamt;
        this.duration = duration;
        this.interestrate = interestrate;
    }
    accessdetails() {
        console.log("customername is :" + this.customername + "age is :" + this.age + "address is :" + this.address + "contact number is:" + this.contactnumber + "loan account number is :" + this.loanaccnumber + "loan type is :" + this.loantype + "loan amount is :" + this.loanamt + "duration is :" + this.duration + "interest rate is :" + this.interestrate);
    }
    interestcalculate() {
        let a = this.loanamt * this.interestrate;
        console.log("the amount is :" + a);
    }
    display() {
        this.accessdetails();
        this.interestcalculate();
    }
}
let x = new loan('harishmitha', 19, 'coimbatore', 99945, 451, 'educational', 450000, 'five years', 3);
x.display();
