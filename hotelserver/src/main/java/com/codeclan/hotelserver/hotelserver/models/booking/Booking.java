package com.codeclan.hotelserver.hotelserver.models.booking;

import com.codeclan.hotelserver.hotelserver.models.people.Guest;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingID;

    @ManyToOne
    @JoinColumn(name = "guestID", nullable = false)
    private Guest guest;

    @Column
//    @ManyToOne
//    @JoinColumn(name = "room_id", nullable = false)
    private Long roomID;

    @ElementCollection
    @Temporal(TemporalType.DATE)
    private List<Date> bookingDates;

    @Column
    private Integer partySize;

    @Column
    private Boolean checkedIn;

    @Column
    private double rate;

    @Column
    private Boolean billPaid;

    public Booking(Guest guest, Long roomID, List<Date> bookingDates, Integer partySize, Boolean checkedIn, double rate, Boolean billPaid) {
        this.guest = guest;
        this.roomID = roomID;
        this.bookingDates = bookingDates;
        this.partySize = partySize;
        this.checkedIn = checkedIn;
        this.rate = rate;
        this.billPaid = billPaid;
    }

    public Booking() {
    }

    public Long getBookingID() {
        return bookingID;
    }

    public void setBookingID(Long bookingID) {
        this.bookingID = bookingID;
    }

    public Guest getGuest() {
        return guest;
    }

    public void setGuest(Guest guest) {
        this.guest = guest;
    }

    public Long getRoomID() {
        return roomID;
    }

    public void setRoomID(Long roomID) {
        this.roomID = roomID;
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

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
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
