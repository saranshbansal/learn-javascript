function Factory() {
  this.createEmployee = function(type) {
    let employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }

    return employee;
  };
}

const FullTime = function() {
  this.hourly = "$12";

  this.say = function() {
    console.log("FullTime: rate " + this.hourly + "/hour");
  };
};

const PartTime = function() {
  this.hourly = "$11";

  this.say = function() {
    console.log("PartTime: rate " + this.hourly + "/hour");
  };
};

const Temporary = function() {
  this.hourly = "$10";

  this.say = function() {
    console.log("Temporary: rate " + this.hourly + "/hour");
  };
};

const Contractor = function() {
  this.hourly = "$15";

  this.say = function() {
    console.log("Contractor: rate " + this.hourly + "/hour");
  };
};

(function run() {
  let employees = [];
  let factory = new Factory();

  employees.push(factory.createEmployee("fulltime"));
  employees.push(factory.createEmployee("parttime"));
  employees.push(factory.createEmployee("temporary"));
  employees.push(factory.createEmployee("contractor"));

  for (let i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
  }
})();
