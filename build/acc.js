"use strict";
class Account {
    constructor(accid, accname) {
        this.acc_id = accid;
        this.acc_name = accname;
    }
    balance(amount, interest) {
        console.log("ACCOUNT DETAILS");
        console.log(`Account Number:${this.acc_id}`);
        console.log(`Account Name:${this.acc_name}`);
        if (interest != null) {
            console.log("SAVINGS ACCOUNT BALANCE: ", amount + (amount * interest));
        }
        else {
            console.log("CURRENT ACCOUNT BALANCE: " + amount);
        }
    }
}
let balance = 10000;
let sav = new Account(1, 'John');
sav.balance(balance, 0.4);
let cur = new Account(1, 'John');
cur.balance(balance);
