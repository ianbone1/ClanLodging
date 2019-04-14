package com.codeclan.hotelserver.hotelserver.models.booking;

import com.codeclan.hotelserver.hotelserver.models.people.Guest;
import com.codeclan.hotelserver.hotelserver.models.rooms.Room;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingID;

    @JsonIgnoreProperties(value="bookings")
    @ManyToOne
    @JoinColumn(name = "guestID", nullable = false)
    private Guest guest;

    @ManyToOne
    @JoinColumn(name = "roomID", nullable = false)
    private Room room;

    @ElementCollection
    @Temporal(TemporalType.DATE)
    private List<Date> bookingDates;

    @Column
    private Integer partySize;

    @Column
    private Boolean checkedIn;

    @Column
    private Boolean billPaid;

    public Booking(Guest guest, Room room, List<Date> bookingDates, Integer partySize, Boolean checkedIn, Boolean billPaid) {
        this.guest = guest;
        this.room = room;
        this.bookingDates = bookingDates;
        this.partySize = partySize;
        this.checkedIn = checkedIn;
        this.billPaid = billPaid;
    }

    public Booking() {
    }

    public Long getBookingID() {
        return this.bookingID;
    }

    public void setBookingID(Long bookingID) {
        this.bookingID = bookingID;
    }

    public Guest getGuest() {
        return this.guest;
    }

    public Long getGuestID(){
        return guest.getGuestID();
    }

    public void setGuest(Guest guest) {
        this.guest = guest;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Integer getPartySize() {
        return partySize;
    }

    public void setPartySize(Integer partySize) {
        this.partySize = partySize;
    }

    public Boolean getCheckedIn() {
        return checkedIn;
    }

    public void setCheckedIn(Boolean checkedIn) {
        this.checkedIn = checkedIn;
    }

    public Boolean getBillPaid() {
        return billPaid;
    }

    public void setBillPaid(Boolean billPaid) {
        this.billPaid = billPaid;
    }

    public List<Date> getBookingDates() {
        return bookingDates;
    }

    public void setBookingDates(List<Date> bookingDates) {
        this.bookingDates = bookingDates;
    }

    public void addBookingDate(Date newDate){
        this.bookingDates.add(newDate);
    }

    public void removeBookingDate(Date oldDate){
        this.bookingDates.remove(oldDate);
    }
}
