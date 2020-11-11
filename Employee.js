//UC_1: To Check EMployee Present or Absent
let IS_ABSENT = 0;
let employeeCheck = Math.floor(Math.random()*10)%3;
if (employeeCheck == IS_ABSENT){
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}

