// you are responsible based on the language of choice to
// convert the proto file into javascript code.
// Use the protoc the proto compiler
const Schema = require("./employees_pb");

const hussein = new Schema.Employee();
hussein.setId(1001);
hussein.setName("Hussein");
hussein.setSalary(1001);
console.log("My Name is " + hussein.getName());

const ahmed = new Schema.Employee();
ahmed.setId(1002);
ahmed.setName("Ahmed");
ahmed.setSalary(9000);
console.log("My Name is " + ahmed.getName());

const rick = new Schema.Employee();
rick.setId(1003);
rick.setName("Rick");
rick.setSalary(5000);


const employees = new Schema.Employees();
employees.addEmployees(hussein);
employees.addEmployees(ahmed);
employees.addEmployees(rick);

//console.log("My Name is " + rick.getName());
// How do we serialize this into binary. 
const bytes = employees.serializeBinary()
console.log("Binary " + bytes);

const fs = require("fs");
fs.writeFileSync("employeesbinary",bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);
// This work!
console.log(employees2.toString())



