//UC-6: To Store Daily Wage and Total Wage in Array
const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const DAYS_PER_MONTH = 20; 

    let daily_wage = new Array();
    let total_wage = new Array();

    

    let daycount =0;
    let hourcount =0;
    let totalwage = 0;
    let dailywage = 0;
    for(let i = 1; i< 31; i++){
        if(daycount<20 && hourcount < 160){
            let employeeCheck = Math.floor(Math.random()*10)%3;

            daycount++;
            let employeeHours =  Employee_Hours(employeeCheck);

            hourcount = hourcount + employeeHours;

           
             dailywage =   employeeHours* WAGE_PER_HOUR;
            
             totalwage = totalwage + employeeHours* WAGE_PER_HOUR;

            daily_wage.push(dailywage);
            total_wage.push(totalwage);
            
            console.log("The Employee Wage on Day",daycount," is",dailywage);
            console.log("The Total Employee Wage after Day",daycount," is",totalwage);
        }
    }
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