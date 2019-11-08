function Employee(name) {
  this.name = name;

  this.say = function() {
    console.log("Employee: " + this.name);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function() {
    console.log("Vendor: " + this.name);
  };
}

function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name);
  };
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  };
}

(function run() {
  const persons = [];

  let employeeFactory = new EmployeeFactory();
  let vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create("Sam"));
  persons.push(employeeFactory.create("Jon"));
  persons.push(vendorFactory.create("Cersie"));
  persons.push(vendorFactory.create("Tyrion"));

  for (let i = 0; i < persons.length; i++) {
    persons[i].say();
  }
})();
