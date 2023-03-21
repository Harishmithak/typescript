"use strict";
class acount {
    constructor(acconumber, accotype) {
        this.acconumber = acconumber;
        this.accotype = accotype;
    }
    balance1(amt, interest) {
        console.log("account number is :" + this.acconumber);
        console.log("account type is :" + this.accotype);
        if (interest != null) {
            console.log("saving acc balance is : ", amt + (amt * interest));
        }
        else {
            console.log("Current acc balance is:" + amt);
        }
    }
}
let y = new acount(12, 'harishmitha');
y.balance1(25000, 2);
let q = new acount(13, 'haritha');
q.balance1(30000);
