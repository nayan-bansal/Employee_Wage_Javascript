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
                emphours =  PART_TIME_HOURS;
                empwage =  PART_TIME_HOURS*WAGE_PER_HOUR;
                break;
            case 2:
                emphours =  FULL_TIME_HOURS;
                empwage =  FULL_TIME_HOURS*WAGE_PER_HOUR;
                break;
                case 3:
                    emphours =  0;
                    empwage =  0;
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
   

    //UC-11: Object Operation using Arrow Functions

    //UC-11A: Find total wages and hours usinf arrow functions

    let total_wages = EmployeeTimeandWage.filter(EmployeeTimeandWage => EmployeeTimeandWage.Employee_Wage > 0).reduce((total_wages,EmployeeTimeandWage) => total_wages = total_wages + EmployeeTimeandWage.Employee_Wage,0);
    console.log("\nThe Total Wages are : "+total_wages);

    let total_hours = EmployeeTimeandWage.filter(EmployeeTimeandWage => EmployeeTimeandWage.Employee_Hours > 0).reduce((total_hours,EmployeeTimeandWage) => total_hours = total_hours + EmployeeTimeandWage.Employee_Hours,0);
    console.log("\nThe Total Hours are : "+total_hours);

    //UC-11B: Show Full Working Day

     EmployeeTimeandWage.filter(EmployeeTimeandWage => EmployeeTimeandWage.Employee_Hours ==8).forEach(EmployeeTimeandWage => console.log(EmployeeTimeandWage.toString()));
    
    //UC-11C- Show PArt Time Working Day
    let part_time = EmployeeTimeandWage.filter(EmployeeTimeandWage => EmployeeTimeandWage.Employee_Hours ==4).map(EmployeeTimeandWage => EmployeeTimeandWage.toString());
    
    console.log("Part Time Working Days:"+part_time);

    //UC_11D- Absent Days
    let Absent_days = EmployeeTimeandWage.filter(EmployeeTimeandWage => EmployeeTimeandWage.Employee_Hours == 0).map(EmployeeTimeandWage => EmployeeTimeandWage.toString());
    
    console.log("\nAbsent Days:"+Absent_days);


