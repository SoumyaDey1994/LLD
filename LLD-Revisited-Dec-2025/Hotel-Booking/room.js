export class Room {
  constructor(roomNo, type, price) {
    this.roomNo = roomNo;
    this.type = type;
    this.price = price;
    this.isAvailable = true;
  }

  bookRoom() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Room ${this.roomNo} is booked`);
      return true;
    }

    console.log(`Room ${this.roomNo} is occupied, can't be booked`);
    return false;
  }

  releaseRoom() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`Room ${this.roomNo} is vacant now`);
    } else {
      console.log(`Room ${this.roomNo} is already vacant`);
    }
    return true;
  }
}
