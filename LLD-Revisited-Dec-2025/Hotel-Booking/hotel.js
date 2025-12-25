import { Booking } from "./booking.js";

export class Hotel {
  constructor(name) {
    this.name = name;
    this.rooms = [];
    this.bookings = [];
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  isRoomAvailable(room, checkInDate, checkOutDate) {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    return !this.bookings.find(
      (booking) =>
        booking.room.roomNo === room.roomNo &&
        checkIn < booking.checkOutDate &&
        checkOut > booking.checkInDate
    );
  }

  findAvailableRoom(roomType, checkInDate, checkOutDate) {
    const targetRoom = this.rooms.find(
      (room) =>
        room.type === roomType &&
        this.isRoomAvailable(room, checkInDate, checkOutDate)
    );
    return targetRoom;
  }

  book(guest, roomType, checkInDate, checkOutDate) {
    const targetRoom = this.findAvailableRoom(
      roomType,
      checkInDate,
      checkOutDate
    );
    if (targetRoom) {
      const isRoomBooked = targetRoom.bookRoom();

      if (isRoomBooked) {
        const booking = new Booking(
          guest,
          targetRoom,
          checkInDate,
          checkOutDate
        );
        this.bookings.push(booking);
        console.log(`Booking confirmed: ${booking.bookingId}`);
        return booking;
      }
    }
    console.log(
      `Unable to book room for period ${checkInDate} to ${checkOutDate}`
    );
    return null;
  }

  cancelBooking(bookingNo) {
    const booking = this.bookings.find(
      (booking) => booking.bookingId === bookingNo
    );
    if (booking) {
      const targetRoom = this.rooms.find(
        (room) => room.roomNo === booking.room.roomNo
      );
      targetRoom.releaseRoom();
      this.bookings = this.bookings.filter(
        (book) => book.bookingId !== bookingNo
      );
      console.log(`Reservation Cancelled for booking ${bookingNo}`);
      return true;
    }

    console.log(`No such booking exists with id ${bookingNo}`);
    return false;
  }

  displayBookings() {
    console.log(`..........Booking Details of Hotel ${this.name}...........`);
    for (const booking of this.bookings) {
      console.log(booking.getBookingDetails());
    }
  }
}
