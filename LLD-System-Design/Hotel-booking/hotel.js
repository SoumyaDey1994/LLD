const Booking = require("./booking");

// Hotel class to manage rooms and bookings
class Hotel {
  constructor(name) {
    this.name = name;
    this.rooms = [];
    this.bookings = [];
  }

  // Add rooms to the hotel
  addRoom(room) {
    this.rooms.push(room);
  }

  // Find available rooms based on room type
  findAvailableRoom(roomType) {
    return this.rooms.find(
      (room) => room.roomType === roomType && room.isAvailable
    );
  }

  // Make a booking for a guest
  makeBooking(guest, roomType, checkInDate, checkOutDate) {
    const availableRoom = this.findAvailableRoom(roomType);

    if (!availableRoom) {
      console.log("No available rooms of the requested type.");
      return null;
    }

    // Book the room and create a booking record
    if (availableRoom.bookRoom()) {
      const booking = new Booking(
        guest,
        availableRoom,
        checkInDate,
        checkOutDate
      );
      this.bookings.push(booking);
      console.log("Booking successful!");
      return booking.getBookingDetails();
    }

    return null;
  }

  // View all bookings for the hotel
  viewBookings() {
    return this.bookings.map((booking) => booking.getBookingDetails());
  }
}

module.exports = Hotel;
