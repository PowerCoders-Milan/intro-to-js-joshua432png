/* Example*/
var mybirth = 1994
var afterwhile = 2030
let currentDate = new Date();
let cDay =  currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear =  currentDate.getFullYear();
console.log(  cDay + "/" + cMonth + "/" + cYear );
console.log("my birthday : " + mybirth + "   in " +  afterwhile + " i will be : " + ( afterwhile - mybirth));
