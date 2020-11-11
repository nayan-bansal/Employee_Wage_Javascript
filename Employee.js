//UC_1: To Check EMployee Present or Absent
let IS_ABSENT = 0;
let employeeCheck = Math.floor(Math.random()*10)%3;
if (employeeCheck == IS_ABSENT){
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}

//UC-2: To Check the Wages of Employee on the basis of Part Time/Full Time
const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    
    let employeeHours =  Employee_Hours(employeeCheck);

    let employeeWage = employeeHours * WAGE_PER_HOUR;
    console.log("Employee wage : $" + employeeWage);
    
    function Employee_Hours(employeeCheck){
    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default :
        return 0;
        
    }
}