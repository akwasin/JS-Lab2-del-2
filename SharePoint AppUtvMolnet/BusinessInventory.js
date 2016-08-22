var Company = Company || {};

Company.Employee = Company.Employee || {
    Employees: new Array()
};

Company.Car = Company.Car || {
    Cars: new Array()
}

Company.Employee.Employees.push(
    { Name: "AJ", HasCar: true },
    { Name: "Erik", HasCar: true },
    { Name: "Peter", HasCar: false },
    { Name: "Bjorn", HasCar: true }
);
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
        ulEmployees.innerHTML += "<li>" + Company.Employee.Employees[i].Name + "</li>";
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
$("#showHasCars").click(listEmployeesWithCars);
$("#showHasNoCars").click(listEmployeesWithCars);

// +1 till Peter Trullenque

function hasCar(employee) {
    var dfd = $.Deferred();
    if (employee.HasCar === true) {
        dfd.resolve(employee);
    } else {
        dfd.reject(employee);
    }
    return dfd.promise();
}

function listEmployeesWithCars() {
    var employees = Company.Employee.Employees;
    employees.forEach(function(item) {
        hasCar(item).then(
            onSuccess
            ,
            function(message) {
                onFailure(message);
            }
        );
    });
}

function onSuccess(item) {
    document.getElementById("EmployeesCarList").innerHTML += "<li>" + item.Name + "  has a car" + "</li>";
}

function onFailure(item) {
    document.getElementById("EmployeesNoCarList").innerHTML += "<li>" + item.Name + " has no car" + "</li>";
}