const { VehicleType } = require("./vehicle");
const { SpotSize } = require("./parkingSpot");

//Enum for Preferred Spots
const PreferredSpots = {
  [VehicleType.MOTORCYCLE]: [SpotSize.SMALL, SpotSize.MEDIUM, SpotSize.LARGE],
  [VehicleType.CAR]: [SpotSize.MEDIUM, SpotSize.LARGE],
  [VehicleType.TRUCK]: [SpotSize.LARGE],
};
// ParkingLot class
class ParkingLot {
  constructor() {
    this.parkingSpots = []; // List of all parking spots
  }

  // Add a new parking spot
  addParkingSpot(spot) {
    this.parkingSpots.push(spot);
  }

  // Find the first available spot for a vehicle with preference for smaller spots
  findAvailableSpot(vehicle) {
    const pfSpots = PreferredSpots[vehicle.type];
    let targetSpot = null;
    for (let spotSize of pfSpots) {
      targetSpot = this.parkingSpots.find(
        (spot) =>
          spot.isAvailable() &&
          spot.size === spotSize &&
          spot.canFitVehicle(vehicle)
      );
      if (targetSpot) {
        return targetSpot;
      }
    }
    return null;
  }

  // Park a vehicle
  parkVehicle(vehicle) {
    const spot = this.findAvailableSpot(vehicle);
    if(spot) {
        const entryTime = Date.now();
        spot.park(vehicle, entryTime);
        return true;
    } else {
        console.log(`No slots to park the vehicle ${vehicle.vehicleNumber}`);
        return false;
    }
  }

  // Remove a vehicle by license plate
  removeVehicleByVehicleNumber(vehicleNumber) {
    const spot = this.parkingSpots.find(spot => spot.vehicle && spot.vehicle.vehicleNumber === vehicleNumber);
    if(spot) {
        const exitTime = Date.now();
        // const totalAmount = spot.removeVehicle(exitTime, this.hourlyRates);
        // return totalAmount;
        const vehicle = spot.vehicle;
        spot.vehicle = null;
        return vehicle.calculateParkingDuration(exitTime);
    } else {
        console.log(`Vehicle ${vehicle.id} not parked in any spot`);
        return false;
    }
  }

  // Display parking lot status
  displayStatus() {
    console.log("\n.....Current Status of Parking Lot.....\n")
    for(let spot of this.parkingSpots) {
        if(spot.vehicle) {
            console.log(`Vehicle ${spot.vehicle.vehicleNumber} currently parked at ${spot.id}`);
        } else {
            console.log(`${spot.id} of ${spot.size} is available`);
        }
    }
  }

  getByVehicleNumber(vehicleNumber) {
    const spot = this.parkingSpots.find(spot => spot.vehicle && spot.vehicle.vehicleNumber === vehicleNumber);
    if(spot) {
      return spot.vehicle;
    }
    return null;
  }
}

module.exports = ParkingLot;