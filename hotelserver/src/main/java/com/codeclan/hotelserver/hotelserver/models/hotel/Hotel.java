package com.codeclan.hotelserver.hotelserver.models.hotel;

import javax.persistence.*;

@Entity
@Table(name = "hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hotelID;

    @Column
    private String hotelName;

    @Column
    private double till;

    public Hotel(String hotelName, double till) {
        this.hotelName = hotelName;
        this.till = till;
    }

    public Hotel() {
    }

    public Long getHotelID() {
        return hotelID;
    }

    public void setHotelID(Long hotelID) {
        this.hotelID = hotelID;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public double getTill() {
        return till;
    }

    public void setTill(double till) {
        this.till = till;
    }
}
