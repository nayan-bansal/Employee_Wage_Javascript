class EmployeePayrollData{

    constructor(...params){
        if(!params[0] > 0) throw "Employee ID Should be Greater than zero"
        {this.id = params[0];}

        this.name = params[1];

        if(params[2] < 0) throw "Salary Should be Greater than zero"
        this.salary = params[2];

        this.gender = params[3];

        if(params[4] > new Date()) throw "future Date not allowed"
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
    set gender(gender) {
        let genderRegex = RegExp('[M,F]{1}$');
        if(genderRegex.test(gender))
        this._gender = gender;
        else throw 'Gender is Incorrect';
    }

    toString(){
        const options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);

        return "\nId: "+this.id+" Name: "+this.name+" Salary: "+this.salary+" Gender: "+this.gender+" Start Date: "+this.startdate;
    }
}

try{
let employee = new EmployeePayrollData(1,"Nayan",50000,"M",new Date("November 30, 2020"));
    console.log(employee.toString()); 
}
catch (e){
    console.log(e);
} 

try{
    let employee = new EmployeePayrollData(1,"Nayan",50000,"Y",new Date("November 3, 2020"));
        console.log(employee.toString()); 
    }
    catch (e){
        console.log(e);
    }

try{
     let employee = new EmployeePayrollData(0,"Nayan",50000,"M",new Date("November 3, 2020"));
        console.log(employee.toString()); 
            }
        catch (e){
            console.log(e);
        }

    try{
        let employee = new EmployeePayrollData(1,"Na",50000,"M",new Date("November 3, 2020"));
                        console.log(employee.toString()); 
            }
        catch (e){
                console.log(e);
            }
 
            try{
                let employee = new EmployeePayrollData(1,"Nayan",-50000,"M",new Date("November 3, 2020"));
                    console.log(employee.toString()); 
                }
                catch (e){
                    console.log(e);
                }
try{
    let employee = new EmployeePayrollData(1,"Nayan",50000,"M",new Date("November 3, 2020"));
        console.log(employee.toString()); 
    }
    catch (e){
        console.log(e);
    }
