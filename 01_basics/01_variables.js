const accountId = 85000
let accountEmail ="ssinghraushan@gmail.com"
var accountPassword ="145221"
accountCity= "Delhi"
let accountState;

//accountId=2  //not allowed

/*
prefer not use to var
bacause of issue in block scope and functional scope 
*/
accountEmail="update@fsa.com"
accountPassword="123456"
accountCity="gurugram"
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
