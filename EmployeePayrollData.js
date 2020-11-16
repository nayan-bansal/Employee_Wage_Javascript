class EmployeePayrollData{

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startdate = params[4];
    }

    get name() { return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        this._name = name;

    else throw 'Name is Incorrect!!' ;
}

    get gender() { return this._gender;}
    set gender(gender) {this._gender = gender;}

    get startdate() { return this._startdate;}
    set startdate(startdate) {this._startdate = startdate;}

    toString(){
        return "\nId: "+this.id+" Name: "+this.name+" Salary: "+this.salary+" Gender: "+this.gender+" Start Date: "+this.startdate;
    }
}
let employee = new EmployeePayrollData(1,"Nayan",50000);
    console.log(employee.toString()); 
    try{
    employee.name = "Ram";
    employee.startdate = "31-10-2020";
    employee.gender = "M";
    console.log(employee.toString()); 
    }
    catch(e){
        console.error(e);
    }
    let newemployee = new EmployeePayrollData(1,"Lucky",50000,"M","1-1-2020");
    console.log(newemployee.toString()); 
