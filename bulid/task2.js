"use strict";
class Course {
    constructor(course_id, course_name) {
        this.courseid = course_id;
        this.coursename = course_name;
    }
    course_details() {
        console.log(`The course id is ${this.courseid} and course name is ${this.coursename}.`);
    }
}
class Employee extends Course {
    constructor(course_id, course_name, emp_id, emp_name, emp_des) {
        super(course_id, course_name);
        this.empid = emp_id;
        this.empname = emp_name;
        this.empdes = emp_des;
    }
    employee_details() {
        super.course_details();
        console.log(`The employee id is ${this.empid},name of the employee is ${this.empname} and his designation is ${this.empdes}`);
    }
}
class Admin extends Employee {
    constructor(course_id, course_name, emp_id, emp_name, emp_des, admin_id, admin_name) {
        super(course_id, course_name, emp_id, emp_name, emp_des);
        this.adminid = admin_id;
        this.adminname = admin_name;
    }
    admindetails() {
        super.employee_details();
        console.log(`The admin id is ${this.adminid} and name of the admin is ranita ${this.adminname}`);
    }
}
let e = new Admin(1, "javascript", 20, "harishmitha", "hr", 1, "harish");
e.admindetails();
