//UC-1: 6 Digit Pin Code

let PinRegex = RegExp('^[1-9]{1}[0-9]{5}$');

let pincode = "132001";

if(PinRegex.test(pincode))
console.log("The Pincode Matches Pattern");
else
console.log("The Pincode Does not Matches Pattern");
