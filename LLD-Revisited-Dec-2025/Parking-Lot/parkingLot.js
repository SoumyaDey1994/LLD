import { PREFERRED_VEHICLE_SPOT } from "./constants.js";

export class ParkingLot {
  constructor() {
    this.spots = [];
  }

  addParkingSpot(parkingSpot) {
    this.spots.push(parkingSpot);
  }

  getCompatibleSpot(vehicleType) {
    return PREFERRED_VEHICLE_SPOT[vehicleType];
  }

  getVehicleByNo(vehicleNo) {
    for (const spot of this.spots) {
      if (spot.vehicle && spot.vehicle.vehicleNo === vehicleNo) {
        return spot.vehicle;
      }
    }

    return null;
  }

  parkVehicle(vehicle) {
    const targetSpotsSizes = this.getCompatibleSpot(vehicle.type);
    for (const spot of this.spots) {
      if (targetSpotsSizes.includes(spot.size)) {
        const isParked = spot.park(vehicle);
        if (isParked) {
          return true;
        }
      }
    }
    console.log(`Vehicle ${this.vehicle.vehicleNo} cannot be parked`);
    return false;
  }

  removeVehicle(vehicleNo) {
    const spot = this.spots.find(
      (spot) => spot.vehicle && spot.vehicle.vehicleNo === vehicleNo
    );
    if (spot) {
      const parkingDuration = spot.unPark(spot.vehicle);
      console.log(`Removed vehicle ${vehicleNo} from spot ${spot.id}`);
      return parkingDuration;
    }
    return 0;
  }

  displayParkingStatus() {
    console.log(`\n.......Parking Status......\n`);
    for (let spot of this.spots) {
      if (spot.vehicle) {
        console.log(
          `Vehicle ${spot.vehicle.vehicleNo} is parked at spot ${spot.id}`
        );
      } else {
        console.log(
          `Parking spot ${spot.id} of size ${spot.size} is currently empty`
        );
      }
    }
  }
}
