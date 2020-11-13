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
    let totalhours = new Map();
    let full_day_work = new Array();
    let part_day_work = new Array();
    let absent_day =  new Array();

    for(let i = 1; i< 31; i++){
        if(daycount<20 && hourcount <= 160){
            let employeeCheck = Math.floor(Math.random()*10)%3;

            daycount++;
            let employeeHours =  Employee_Hours(employeeCheck);

            hourcount = hourcount + employeeHours;

            if(employeeHours == 4)
            part_day_work.push(i);
            else if(employeeHours == 8)
            full_day_work.push(i);
            else
            absent_day.push(i);
           
             dailywage =   employeeHours* WAGE_PER_HOUR;
            
             totalwage = totalwage + employeeHours* WAGE_PER_HOUR;

            daily_wage.push(dailywage);
            total_wage.push(totalwage);

            
            
            console.log("The Employee Wage on Day",daycount," is",dailywage);
            console.log("The Total Employee Wage after Day",daycount," is",totalwage);
            totalhours.set(daycount,employeeHours);
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

//UC-7A: Total Wages of Employees
let completewage = 0;

function sum(dailywage){
    return completewage = completewage + dailywage;
}
daily_wage.forEach(sum);
console.log("Total Workin Days: ",daycount,"\nTotal Working Hours: ",hourcount,"\nTotal Wage: ",completewage);

function total(dailywage){
    return completewage ;
}

console.log("(Reduce Method)Total Workin Days: ",daycount,"\nTotal Working Hours: ",hourcount,"\nTotal Wage: ",daily_wage.reduce(total,0));

//UC-7B- Print Day with  Daily Wage
let daycounter = 0;
let wagewithday = daily_wage.map(counter);
console.log(wagewithday);

function counter(dailywage){
    daycounter++;
    return "Day- "+daycounter+ " Wage = " + dailywage;
}

//UC_7C- Show Days Full time wage was earned

let daycounter_fulltime = 0;
function full_day(dailywage){
     daycounter_fulltime++ ;
    
    if(dailywage ==  FULL_TIME_HOURS * WAGE_PER_HOUR){
    console.log("Day- ",daycounter_fulltime, "Full time Wage = " ,dailywage);

        return dailywage;
    }
}
console.log("\n");

 wagewithday =  daily_wage.filter(full_day);

 //UC-7D: To display the day of full time employee 
 let full_count =0,count =0, flag=0;
 function day(dailywage){
  
   
    full_count++;
    if(dailywage == 160)
        count++;

    if(count ==1 && flag ==0){
    console.log("The first Day with Full time wage is:",full_count);
        flag = 1;}
    
    
 } 
 daily_wage.find(day);


 //UC-7E: To check if Employee Worked Full time for all days
 if(count == full_count)
 console.log("Every Day, the Employee Worked Full Time");
 else
 console.log("Every Day, the Employee did not Worked For Full Time");

 //UC-7F: To Check Part Time Employee
 let part_count =0,p_count=0,p_flag =0;
 function part_day(dailywage){
  
    part_count++;
    if(dailywage == 80)
        p_count++;

   if(p_count ==1 && p_flag == 0){
    console.log("The Array has Part Time Employees");
p_flag = 1;}
    
 } 
 daily_wage.find(part_day);

 //UC_7G: Count the Total Number of Days Worked
console.log("The Total No. of Days Worked are: ",full_count);

//UC-8: To store employee wage and day in Map

let employeewagemap  = new Map();
let totalwagemap = new Map();
for(let i=1;i<daily_wage.length;i++){
    employeewagemap.set(i, daily_wage[i]);
    
}
console.log("The Daywise Wages are:\n");
for(let i=1;i<daily_wage.length;i++)
console.log("The Daily Wage on Day ",i," is ",employeewagemap.get(i));

for(let i=1;i<total_wage.length;i++){
    totalwagemap.set(i, total_wage[i]);   
}
console.log("The Daywise Total Wages are:\n");
for(let i=1;i<total_wage.length;i++)
console.log("The Total Wage on Day ",i," is ",totalwagemap.get(i));

//UC-9: To Print No. of hours worked and Wages using Arrow Function and Print Full Day, Half Day and Absent Days
let total_sum = 0;
let sum_wage = totalwagemap =>  totalwagemap.get(total_wage.length-1);
console.log("\nThe Total Wage Paid to the Employee is :", sum_wage(totalwagemap));

let sum_hour = totalhours =>  {
    let sum = 0;
    for(let i =1; i<21;i++){
        sum = sum + totalhours.get(i);
    }
    return sum
};
console.log("\nThe Total Hours Employee Worked is :", sum_hour(totalhours));

working_day = full_day_work => {

    for (let i = 0;i<full_day_work.length;i++)
    console.log( "Day :" + full_day_work[i]);

    return full_day_work.length;
}

console.log("Full Working Days: ",working_day(full_day_work));
console.log("Half Working Days: ",working_day(part_day_work));
console.log("Absent Days: ",working_day(absent_day));




