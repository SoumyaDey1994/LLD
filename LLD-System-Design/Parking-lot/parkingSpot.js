const { VehicleType } = require("./vehicle");
// Enum for parking spot sizes
const SpotSize = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
};

class ParkingSpot {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.vehicle = null;
  }

  isAvailable() {
    return this.vehicle === null;
  }

  canFitVehicle(vehicle) {
    if (
      this.size === SpotSize.SMALL &&
      vehicle.type === VehicleType.MOTORCYCLE
    ) {
      return true;
    } else if (
      this.size === SpotSize.MEDIUM &&
      (vehicle.type === VehicleType.MOTORCYCLE || VehicleType.CAR)
    ) {
      return true;
    } else if (this.size === SpotSize.LARGE) {
      return true;
    }

    return false;
  }

  park(vehicle, entryTime) {
    if(this.isAvailable() && this.canFitVehicle(vehicle)) {
        vehicle.setEntryTime(entryTime);
        this.vehicle = vehicle;
        console.log(`Vehicle ${vehicle.vehicleNumber} parked at spot ${this.id}`);
        return true;
    } else {
        console.log("Unable to park vehicle: "+vehicle.vehicleNumber);
        return false;
    }
  }

  removeVehicle(exitTime, hourlyRates) {
    if(this.vehicle) {
        const vehicle = this.vehicle;
        console.log(`Vehicle ${this.vehicle.vehicleNumber} removed from spot ${this.id}`);
        const duration = vehicle.calculateParkingDuration(exitTime);
        const billAmount = this.calculateBill(duration, hourlyRates);
        this.vehicle = null;
        return billAmount;
    } else {
        console.log(`No vehicle parked at spot ${this.id}`);
        return 0;
    }
  }

  calculateBill(duration, hourlyRates) {
    const rate = hourlyRates[this.vehicle.type];
    const durationInHours = duration/(60 * 60);
    return Math.ceil((rate * durationInHours));
  }
  
}

module.exports = {
    SpotSize,
    ParkingSpot
}