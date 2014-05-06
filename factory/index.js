/**
 * Created by rmeghl on 5/6/2014.
 * Factory Pattern
 */

function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

function VehicleFactory() {
}

VehicleFactory.prototype.vehicleClass = Car; // this is the default value of the vehicleClass

VehicleFactory.prototype.createVehicle = function (options) {
    if (options.vehicleType === "car") {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }

    return new this.vehicleClass(options)
};

var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "red",
    doors: 6
});

console.log(car instanceof Car);
console.log(car);