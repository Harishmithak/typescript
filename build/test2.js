"use strict";
class account {
    constructor(bank_name, acc_type) {
        this.bankname = bank_name;
        this.acctype = acc_type;
    }
    balance() {
        console.log("the account name is " + this.bankname + "account type is" + this.acctype);
    }
}
let j = new account("kvb", "savings");
j.balance();
class account1 {
    constructor(bank_name, acc_type) {
        this.bankname = bank_name;
        this.acctype = acc_type;
    }
    balance() {
        console.log("the account name is " + this.bankname + "account type is" + this.acctype);
    }
}
let f = new account1("kvb", "current");
f.balance();
