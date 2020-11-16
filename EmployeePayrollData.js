class EmployeePayrollData{

    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() { return this._name;}
    set name(name) {this._name = name;}

    toString(){
        return "Id: "+this.id+" Name: "+this.name+" Salary: "+this.salary;
    }
}
let employee = new EmployeePayrollData(1,"Nayan",50000);
    console.log(employee.toString()); 