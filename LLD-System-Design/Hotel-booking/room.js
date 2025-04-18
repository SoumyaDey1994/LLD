// Room class to represent individual rooms in the hotel
class Room {
  constructor(roomNumber, roomType, price) {
    this.roomNumber = roomNumber;
    this.roomType = roomType; // e.g., Single, Double, Suite
    this.price = price;
    this.isAvailable = true;
  }

  // Method to book the room
  bookRoom() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return true;
    }
    return false;
  }

  // Method to release (free up) the room
  releaseRoom() {
    this.isAvailable = true;
  }
}

module.exports = Room;
