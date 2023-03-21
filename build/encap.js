"use strict";
class Encapsulation {
    //private _name: string;
    //constructor(name: string) {
    //this._name = name;
    //}
    getname() {
        //console.log("Name: " + this._name);
    }
    setname(value) {
        //  this._name = value;
    }
}
let l = new Encapsulation();
l.setname('John Doe');
l.getname();
