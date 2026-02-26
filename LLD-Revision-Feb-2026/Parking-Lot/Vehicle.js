import { VehicleType } from "./constant.js";

class Vehicle {
  constructor(id, type) {
    this.vehicleNo = id;
    this.type = type;
    this.entryTime = null;
  }

  setEntryTime(time) {
    this.entryTime = time;
  }

  calculateParkingDurationInMinutes(exitTime) {
    const duration = (exitTime - this.entryTime) / (1000 * 60);
    return duration;
  }
}

export class Bike extends Vehicle {
  constructor(id) {
    super(id, VehicleType.Bike);
  }
}

export class Car extends Vehicle {
  constructor(id) {
    super(id, VehicleType.Car);
  }
}

export class Truck extends Vehicle {
  constructor(id) {
    super(id, VehicleType.Truck);
  }
}
