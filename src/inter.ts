interface Calculated {
    calculate(input1: number, input2: number): void;
}

class Add implements Calculated { //addition class
    calculate(input1: number, input2: number) {
        console.log("The Addition of" + " " + input1 + "+" + input2 + "=" + (input1 + input2));

    }
}

class Subtract implements Calculated { //subtraction class
    calculate(input1: number, input2: number) {
        console.log("The subtraction of" + " " + input1 + "-" + input2 + "=" + (input1 - input2));
    }
}

class Mulitiple implements Calculated { //multiplication class
    calculate(input1: number, input2: number) {
        console.log("The multiplication of" + " " + input1 + "*" + input2 + "=" + (input1 * input2));
    }
}

class Divide implements Calculated { //division class
    calculate(input1: number, input2: number) {
        console.log("The division of" + " " + input1 + "/" + input2 + "=" + (input1 / input2));
    }
}

class Calculator { //calculator 
    input1: number;
    input2: number;
    condition: Calculated; //interface type specification

    constructor(input1: number, input2: number, condition: Calculated) {
        this.input1 = input1;
        this.input2 = input2;
        this.condition = condition;

        const operateObj = this.condition; //new Add
        operateObj.calculate(this.input1, this.input2);
    }
}