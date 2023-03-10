class Employeedetails {
    id?: string | number;
    name: string;
    des: string;
    salary: number;
    project: string;
    constructor(id: string, name: string, des: string, salary: number, project: string) {
        this.id = id;
        this.name = name;
        this.des = des;
        this.salary = salary;
        this.project = project;
    }
    disp(): void {

        console.log(` employee id is a        : ${this.id}`);
        console.log(` employee name is        : ${this.name}`);
        console.log(` employee Designation is : ${this.des}`);
        console.log(` employee Salary is      : ${this.salary}`);
        console.log(`employee Project is      : ${this.project}`);

    }
}
var  a= new Employeedetails("123","harishmitha","tl",40000,"googlesheets");
a.disp();