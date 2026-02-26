import { isSpotCompatibe } from "./constant.js";

export class ParkingLot {
  constructor() {
    this.spots = [];
  }

  addParkingSpot(parkingSpot) {
    this.spots.push(parkingSpot);
  }

  getVehicleByNo(vehicleNo) {
    for (let pSpot of this.spots) {
      if (pSpot.vehicle && pSpot.vehicle.vehicleNo === vehicleNo) {
        console.log(`Vehicle ${vehicleNo} found`);
        return pSpot.vehicle;
      }
    }
    console.log(`Vehicle ${vehicleNo} doesn't exists`);
    return null;
  }

  getSpotByVehicleNo(vehicleNo) {
    for (let pSpot of this.spots) {
      if (pSpot.vehicle && pSpot.vehicle.vehicleNo === vehicleNo) {
        console.log(`Vehicle ${vehicleNo} found at spot ${pSpot.id}`);
        return pSpot;
      }
    }
    console.log(`Vehicle ${vehicleNo} doesn't exists`);
    return null;
  }

  parkVehicle(vehicle) {
    for (let spot of this.spots) {
      if (spot.vehicle === null && isSpotCompatibe(vehicle.type, spot.size)) {
        const isParked = spot.addVehicle(vehicle);
        return isParked;
      }
    }

    console.log(
      `No suitable parking spot available for vehicle ${vehicle.vehicleNo}`,
    );
  }

  unParkVehicle(vehicleNo) {
    const targetSpot = this.getSpotByVehicleNo(vehicleNo);
    if (targetSpot) {
      const vehicleParked = targetSpot.vehicle;
      const durationInMins = targetSpot.removeVehicle(vehicleParked.vehicleNo);
      return durationInMins;
    }

    console.log(`Vehicle ${vehicleNo} not parked in this parking lot`);
    return 0;
  }

  displayParkingStatus() {
    for (let spot of this.spots) {
      if (spot.vehicle) {
        console.log(
          `Vehicle ${spot.vehicle.vehicleNo} parked at spot ${spot.id}`,
        );
      } else {
        console.log(`Spot ${spot.id} is currently available`);
      }
    }
  }
}
