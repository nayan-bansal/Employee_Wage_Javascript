//UC_1: To Check EMployee Present or Absent
let IS_ABSENT = 0;
let employeeCheck = Math.floor(Math.random()*10)%3;
if (employeeCheck == IS_ABSENT){
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}

//UC-4: To Check the Wages of Employee for a Month
const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const DAYS_PER_MONTH = 20; 
    let employeeHours =  Employee_Hours(employeeCheck);

    let employeeWage = employeeHours * WAGE_PER_HOUR;

    let total_wage = employeeWage*DAYS_PER_MONTH;

    console.log("Total Employee wage : $" + total_wage);
    
    function Employee_Hours(employeeCheck){
    switch (employeeCheck) {
        case IS_PART_TIME:
            console.log("Employee is Part Time");
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            console.log("Employee is Full Time");
            return FULL_TIME_HOURS;
            break;
        default :
        console.log("Employee is Absent");
        return 0;
        
    }
}