import { isSpotCompatibe } from "./constant.js";
export class ParkingSpot {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.vehicle = null;
  }

  isSpotAvailable() {
    return this.vehicle === null;
  }

  canFitVehicle(vehicleType) {
    return isSpotCompatibe(vehicleType, this.size);
  }

  addVehicle(vehicle) {
    if (this.isSpotAvailable() && this.canFitVehicle(vehicle.type)) {
      this.vehicle = vehicle;
      this.vehicle.setEntryTime(Date.now());
      return true;
    }

    console.log(`Vehicle ${(vehicle, vehicleNo)} cannot be parked`);
    return false;
  }

  removeVehicle(vehicleNo) {
    if (this.vehicle && this.vehicle.vehicleNo === vehicleNo) {
      const parkingDurationInMins =
        this.vehicle.calculateParkingDurationInMinutes(Date.now());
      this.vehicle = null;
      console.log(`Vehicle ${vehicleNo} removed from spot`);
      return parkingDurationInMins;
    }
    console.log(`Vehicle ${vehicleNo} doesn't exists at spot ${this.id}`);
    return 0;
  }
}
