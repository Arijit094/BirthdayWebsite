const name="Debosmita";
const passCode="Arijit";
let nameByUser;
let passCodeByUser;
nameByUser=prompt("Enter Your Name ");
passCodeByUser=prompt("Enter The Passcode ");
if(nameByUser===name && passCodeByUser===passCode){
	alert("You have successfully entered the name and passcode, click OK to continue.")
}
else{
	window.location='wrong.htm';
}