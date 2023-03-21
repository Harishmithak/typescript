class Encapsulation {
    //private _name: string;

    //constructor(name: string) {
       //this._name = name;
    //}

    public getname(): any {
        //console.log("Name: " + this._name);
    }

    public setname(value: string) {
      //  this._name = value;
    }
}
let l = new Encapsulation();
l.setname('John Doe');
l.getname();