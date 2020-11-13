//UC-10: Use of Object to Store the Details of the Employees


    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const DAYS_PER_MONTH = 20; 
    
    let daycount =0;
    let emphours = 0;
    let empwage =0;

    let EmployeeTimeandWage = new Array();

    while(daycount<20 && emphours <=160){
        daycount++;

        let EmployeeCheck = Math.floor(Math.random()*10)%3 + 1;

        switch(EmployeeCheck){
            case 1:
                emphours = emphours + PART_TIME_HOURS;
                empwage = empwage + PART_TIME_HOURS*WAGE_PER_HOUR;
                break;
            case 2:
                emphours = emphours + FULL_TIME_HOURS;
                empwage = empwage + FULL_TIME_HOURS*WAGE_PER_HOUR;
                break;
            default:
                break;
        }

        EmployeeTimeandWage.push(
            {
                Employee_days: daycount, 
                Employee_Hours: emphours, 
                Employee_Wage: empwage, 
            toString(){
                return "\nDay: "+ this.Employee_days + " Working Hours: "+ this.Employee_Hours+" Daily Wage: "+ this.Employee_Wage
        }, 
    });  
    }

    console.log("The Total Hours Worked and Time"+EmployeeTimeandWage);
   



