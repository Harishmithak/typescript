"use strict";
class Parent1 {
    constructor(fname, mname) {
        this.fathername = fname;
        this.mothername = mname;
    }
    details() {
        console.log('Parents Details' + '\n' + this.fathername + '\n' + this.mothername);
    }
}
class Child1 extends Parent1 {
    constructor(dad, mom, kid) {
        super(dad, mom);
        this.childname = kid;
    }
    details() {
        super.details();
        console.log(`Kid's name: ${this.childname}.`);
    }
}
let c1 = new Child1('John', 'Rita', 'Tom');
c1.details();
