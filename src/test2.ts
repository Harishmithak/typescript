interface savings {
    balance(bankname:string,acctype:string): any;
}
interface current {
    balance(bankname:string,acctype:string): any;
}

class account implements savings{
bankname:string;
acctype:string;

    constructor(bank_name: string, acc_type: string) {
        this.bankname=bank_name;
        this.acctype=acc_type;
    }

    balance(): any{
        console.log("the account name is "+this.bankname+"account type is"+this.acctype);
    }
}
 

let j = new account("kvb","savings");
j.balance();



class account1 implements savings{
    bankname:string;
    acctype:string;
    
        constructor(bank_name: string, acc_type: string) {
            this.bankname=bank_name;
            this.acctype=acc_type;
        }
    
        balance(): any{
            console.log("the account name is "+this.bankname+"account type is"+this.acctype);
        }
    }
     
    
    let f = new account1("kvb","current");
    f.balance();
    



