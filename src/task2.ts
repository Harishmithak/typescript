class Course{
    courseid: number;
    coursename: string;

    constructor(course_id: number, course_name: string) {
        this.courseid = course_id;
        this.coursename = course_name;
    }

    public course_details(): any{
        console.log(`The course id is ${this.courseid} and course name is ${this.coursename}.`);
    }
}

class Employee extends Course{
    empid: number;
    empname: string;
    empdes: string;

    constructor(course_id: number, course_name: string, emp_id: number, emp_name: string, emp_des: string ) {
        super(course_id, course_name);
        this.empid = emp_id;
        this.empname = emp_name;
        this.empdes = emp_des;
    }

    public employee_details(): any{
        super.course_details();
        console.log(`The employee id is ${this.empid},name of the employee is ${this.empname} and his designation is ${this.empdes}`)
    }
}

class Admin extends Employee{
    adminid: number;
    adminname: string;

    constructor(course_id: number, course_name: string, emp_id: number, emp_name: string, emp_des: string, admin_id: number, admin_name: string) {
        super(course_id, course_name, emp_id, emp_name, emp_des);
        this.adminid = admin_id;
        this.adminname = admin_name;
    }

    public admindetails() {
        super.employee_details();
        console.log(`The admin id is ${this.adminid} and name of the admin is ranita ${this.adminname}`);
    }
}

let e= new Admin(1, "javascript", 20, "harishmitha", "hr", 1, "harish");
e.admindetails();