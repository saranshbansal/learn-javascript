const TeslaModelS = function() {
  this.numWheels = 4;
  this.manufacturer = "Tesla";
  this.make = "Model S";
};

TeslaModelS.prototype = {
  go: function() {
    // Rotate wheels
    console.log("Rotate wheels");
  },
  stop: function() {
    // Apply brake pads
    console.log("Apply brake pads");
  }
};

const car = new TeslaModelS();
car.go();
car.stop();
