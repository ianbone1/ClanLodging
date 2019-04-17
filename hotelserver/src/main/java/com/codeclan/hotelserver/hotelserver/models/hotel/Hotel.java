package com.codeclan.hotelserver.hotelserver.models.hotel;

import javax.persistence.*;

@Entity
@Table(name = "hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hotelid;

    @Column
    private String hotelname;

    @Column
    private double till;

    public Hotel(String hotelname, double till) {
        this.hotelname = hotelname;
        this.till = till;
    }

    public Hotel() {
    }

    public Long getHotelid() {
        return hotelid;
    }

    public void setHotelid(Long hotelid) {
        this.hotelid = hotelid;
    }

    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname;
    }

    public double getTill() {
        return till;
    }

    public void setTill(double till) {
        this.till = till;
    }
}
