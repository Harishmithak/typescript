"use strict";
class Add {
    calculate(input1, input2) {
        console.log("The Addition of" + " " + input1 + "+" + input2 + "=" + (input1 + input2));
    }
}
class Subtract {
    calculate(input1, input2) {
        console.log("The subtraction of" + " " + input1 + "-" + input2 + "=" + (input1 - input2));
    }
}
class Mulitiple {
    calculate(input1, input2) {
        console.log("The multiplication of" + " " + input1 + "*" + input2 + "=" + (input1 * input2));
    }
}
class Divide {
    calculate(input1, input2) {
        console.log("The division of" + " " + input1 + "/" + input2 + "=" + (input1 / input2));
    }
}
class Calculator {
    constructor(input1, input2, condition) {
        this.input1 = input1;
        this.input2 = input2;
        this.condition = condition;
        const operateObj = this.condition; //new Add
        operateObj.calculate(this.input1, this.input2);
    }
}
//calculator calling....
const calculatorObj = new Calculator(100, 75.0, new Add); //(it should be input1 & input2 & like to you perform)
const calculatorObj1 = new Calculator(100, 75.0, new Subtract);
const calculatorObj2 = new Calculator(2, 2, new Mulitiple); //(it should be input1 & input2 & like to you perform)
