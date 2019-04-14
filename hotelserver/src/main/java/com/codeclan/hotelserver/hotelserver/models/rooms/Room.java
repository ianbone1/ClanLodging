package com.codeclan.hotelserver.hotelserver.models.rooms;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomID;

    @Column
    private int roomNumber;

    @Column
    private RoomType roomType;

    @JsonIgnoreProperties(value = "room")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "room")
    private List<Booking> bookings;

    @Column
    private double rate;

    public Room(int roomNumber, RoomType roomType, double rate) {
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.bookings = null;
        this.rate =  rate;
    }

    public Room() {
    }

    public Long getRoomID() {
        return roomID;
    }

    public void setRoomID(Long roomID) {
        this.roomID = roomID;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public void addBooking(Booking newBooking){
        this.bookings.add(newBooking);
    }

    public void removeBooking(Booking oldBooking){
        this.bookings.remove(oldBooking);
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }
}
