export class Booking {
  constructor(guest, room, checkInDate, checkOutDate) {
    this.guest = guest;
    this.room = room;
    this.checkInDate = new Date(checkInDate);
    this.checkOutDate = new Date(checkOutDate);
    this.bookingId = `Booking_${Date.now()}`;
  }

  getBookingDetails() {
    const noOfDays = Math.ceil(
      (this.checkOutDate - this.checkInDate) / (24 * 60 * 60 * 1000)
    );
    const totalAmount = this.room.price * noOfDays;

    return {
      bookingId: this.bookingId,
      roomNo: this.room.roomNo,
      roomType: this.room.type,
      guestName: this.guest.name,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      daysOfStay: noOfDays,
      totalAmount: totalAmount,
    };
  }
}
