// Write your solution in this file!
const employee = {
    name: 'ewok',
    streetAdress: 'endor',
}

function updateEmployeeWithKeyAndValue(employee, key, value){    
    const employee_2 = {
        name : "Sam",
        streetAddress : "11 Broadway",
    }
    const NewEmployee = {...employee , ...employee_2};
    return NewEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;

}

function deleteFromEmployeeByKey(){
    const { name, ...my } = employee
    return my
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name
    return employee
}