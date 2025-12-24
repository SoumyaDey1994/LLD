import { VEHICLE_TYPE } from "./constants.js";

class Vehicle {
  constructor(vehicleNo, type) {
    this.vehicleNo = vehicleNo;
    this.type = type;
    this.entryTime = null;
  }

  setEntryTime(time) {
    this.entryTime = time;
  }

  getParkingDurationInHours(exitTime) {
    return Math.ceil((exitTime - this.entryTime) / (60 * 60 * 24));
  }
}

export class Bike extends Vehicle {
  constructor(vehicleNo) {
    super(vehicleNo, VEHICLE_TYPE.BIKE);
  }
}

export class Car extends Vehicle {
  constructor(vehicleNo) {
    super(vehicleNo, VEHICLE_TYPE.CAR);
  }
}

export class Truck extends Vehicle {
  constructor(vehicleNo) {
    super(vehicleNo, VEHICLE_TYPE.TRUCK);
  }
}
