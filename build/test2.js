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
let f = new account("kvb", "current");
f.balance();
// class account1 implements savings{
//     bankname:string;
//     acctype:string;
//         constructor(bank_name: string, acc_type: string) {
//             this.bankname=bank_name;
//             this.acctype=acc_type;
//         }
//         balance(): any{
//             console.log("the account name is "+this.bankname+"account type is"+this.acctype);
//         }
//     }
