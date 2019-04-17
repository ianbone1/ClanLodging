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
    private Long bookingid;

    @JsonIgnoreProperties(value="bookings")
    @ManyToOne
    @JoinColumn(name = "guestid", nullable = false)
    private Guest guest;

    @ManyToOne
    @JoinColumn(name = "roomid", nullable = false)
    private Room room;

    @ElementCollection
    @Temporal(TemporalType.DATE)
    private List<Date> bookingdates;

    @Column
    private Integer partysize;

    @Column
    private Boolean checkedin;

    @Column
    private Boolean billpaid;

    public Booking(Guest guest, Room room, List<Date> bookingdates, Integer partysize, Boolean checkedin, Boolean billpaid) {
        this.guest = guest;
        this.room = room;
        this.bookingdates = bookingdates;
        this.partysize = partysize;
        this.checkedin = checkedin;
        this.billpaid = billpaid;
    }

    public Booking() {
    }

    public Long getBookingid() {
        return bookingid;
    }

    public void setBookingid(Long bookingid) {
        this.bookingid = bookingid;
    }

    public Guest getGuest() {
        return guest;
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

    public List<Date> getBookingdates() {
        return bookingdates;
    }

    public void setBookingdates(List<Date> bookingdates) {
        this.bookingdates = bookingdates;
    }

    public Integer getPartysize() {
        return partysize;
    }

    public void setPartysize(Integer partysize) {
        this.partysize = partysize;
    }

    public Boolean getCheckedin() {
        return checkedin;
    }

    public void setCheckedin(Boolean checkedin) {
        this.checkedin = checkedin;
    }

    public Boolean getBillpaid() {
        return billpaid;
    }

    public void setBillpaid(Boolean billpaid) {
        this.billpaid = billpaid;
    }

    public Long getGuestid(){
        return this.getGuest().getGuestid();
    }

    public void addBookingdate(Date newdate){
        this.bookingdates.add(newdate);
    }

    public void removeBookingdate(Date olddate){
        this.bookingdates.remove(olddate);
    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof Booking )) return false;
//        return bookingid != null && bookingid.equals(((Booking) o).getBookingid());
//    }
//    @Override
//    public int hashCode() {
//        return 31;
//    }
}
