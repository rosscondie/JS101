// TASK 1
let employees = [
    {
        "id": 1,
        "name": "John",
        "age": 35,
        "position": "Manager"
    },
    {
        "id": 2,
        "name": "Alice",
        "age": 42,
        "position": "Developer"
    },
    {
        "id": 3,
        "name": "Bob",
        "age": 28,
        "position": "Designer"
    },
    {
        "id": 4,
        "name": "Emily",
        "age": 38,
        "position": "Analyst"
    },
    {
        "id": 5,
        "name": "David",
        "age": 45,
        "position": "Engineer"
    },
    {
        "id": 6,
        "name": "Sarah",
        "age": 32,
        "position": "Sales Representative"
    },
]

// TASK 2
let employeesList = employees.map((employee) => {
    console.log(employee.id, employee.name, employee.age, employee.position)
})

// TASK 3
function below40() {
   let employeesUnder40 = employees.filter(employee => employee.age < 40)
   console.log(employeesUnder40);
}

below40();

// TASK 4
let result = employees.find(({ name, position }) => name === "John" && position === "Manager")
console.log(result)

// TASK 5
let sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name))
console.log(employees)
console.log(sortedEmployees)

// TASK 6
let newEmployee = {
    "id": 7,
    "name": "Bruce",
    "age": 45,
    "position": "CEO"
}
employees.push(newEmployee)
console.log(employees)

// TASK 7
console.log(employees.length)