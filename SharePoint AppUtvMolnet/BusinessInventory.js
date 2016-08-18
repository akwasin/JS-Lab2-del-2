var Company = Company || {};

Company.Employee = Company.Employee || {
    Employees: new Array()
};

Company.Car = Company.Car || {
    Cars: new Array()
}

Company.Employee.Employees.push("AJ", "Erik", "Peter", "Bjorn");
Company.Car.Cars.push("Volvo", "Nissan", "BMW", "Ford");

function writeCars() {
    var ulCars = document.getElementById("CarsList");
    ulCars.innerHTML = "";
    for (var i = 0; i < Company.Car.Cars.length; i++) {
        ulCars.innerHTML += "<li>" + Company.Car.Cars[i] + "</li>";
    }
    $("#showCars").val("Hide Cars");
    $("#showCars").click(hideCars);
}
function hideCars() {
    var ulCars = document.getElementById("CarsList");
    ulCars.innerHTML = "";
    $("#showCars").val("Show Cars");
    $("#showCars").click(writeCars);
}

function writeEmployees() {
    var ulEmployees = document.getElementById("EmployeeList");
    ulEmployees.innerHTML = "";
    for (var i = 0; i < Company.Employee.Employees.length; i++) {
        ulEmployees.innerHTML += "<li>" + Company.Employee.Employees[i] + "</li>";
    }
    $("#showEmployees").val("Hide Employees");
    $("#showEmployees").click(hideEmployees);
}

function hideEmployees() {
    var ulEmployees = document.getElementById("EmployeeList");
    ulEmployees.innerHTML = "";
    $("#showEmployees").val("Show Employees");
    $("#showEmployees").click(writeEmployees);
}

$("#showCars").click(writeCars);
$("#showEmployees").click(writeEmployees);
// +1 till Peter Trullenque