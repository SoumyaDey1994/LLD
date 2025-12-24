import { isSpotCompatibe } from "./constants.js";

export class ParkingSpot {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.vehicle = null;
  }

  isAvailable() {
    return this.vehicle === null;
  }

  canFitVehicle(vehicle) {
    return isSpotCompatibe(vehicle.type, this.size);
  }

  park(vehicle) {
    if (this.isAvailable() && this.canFitVehicle(vehicle)) {
      this.vehicle = vehicle;
      this.vehicle.setEntryTime(Date.now());
      console.log(
        `Vehicle ${this.vehicle.vehicleNo} parked in spot ${this.id}`
      );
      return true;
    }
    console.log(
      `Vehicle ${this.vehicle.vehicleNo} cannot be parked in spot ${this.id}`
    );
    return false;
  }

  unPark(vehicle) {
    if (this.vehicle.vehicleNo !== vehicle.vehicleNo) {
      console.log(
        `Vehicle ${this.vehicle.vehicleNo} is not parked in spot ${this.id}`
      );
      return null;
    }

    const parkDuration = this.vehicle.getParkingDurationInHours(Date.now());
    this.vehicle = null;
    return parkDuration;
  }
}
