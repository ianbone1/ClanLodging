package com.codeclan.hotelserver.hotelserver.models.rooms;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomid;

    @Column
    private int roomnumber;

    @Column
    private RoomType roomtype;

    @JsonIgnoreProperties(value = "room")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "room")
    private List<Booking> bookings;

    @Column
    private double rate;

    public Room(int roomnumber, RoomType roomtype, double rate) {
        this.roomnumber = roomnumber;
        this.roomtype = roomtype;
        this.bookings = new ArrayList<Booking>();
        this.rate = rate;
    }

    public Room() {
    }

    public Long getRoomid() {
        return roomid;
    }

    public void setRoomid(Long roomid) {
        this.roomid = roomid;
    }

    public int getRoomnumber() {
        return roomnumber;
    }

    public void setRoomnumber(int roomnumber) {
        this.roomnumber = roomnumber;
    }

    public RoomType getRoomtype() {
        return roomtype;
    }

    public void setRoomtype(RoomType roomtype) {
        this.roomtype = roomtype;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }
}
