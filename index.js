const employee = {
    name: 'Sam', 
    streetAddress:'11 Kisauni'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = employee;
    for (const i in employee) {
        delete employee[i];
    }
    updatedEmployee.name = 'Sam';
    const newEmployee = { ...updatedEmployee, streetAddress: '11 Broadway' };
    return newEmployee;
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) =>{
    employee[key] = value;
    return employee;
}
const deleteFromEmployeeByKey = (employee, key) => {
employee[key] = 'Sam';
const newEmployee =  {...employee, name : undefined }
return newEmployee;
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}

