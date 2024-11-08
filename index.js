

const fs = require("fs"); 

const employees = []

employees.push({
    "name": "Hussein",
    "Salary": 1000,
    "id": 1001
})


const ahmed = {
    "name": "Hussein",
    "Salary": 9000,
    "id": 1002
}

employees.push(ahmed)

employees.push({
    "name": "Rick",
    "Salary": 5000,
    "id": 1003
})


console.log(JSON.stringify(employees))

// This is data which I got from somewhere. 
fs.writeFileSync("jsondata.json",JSON.stringify(employees));