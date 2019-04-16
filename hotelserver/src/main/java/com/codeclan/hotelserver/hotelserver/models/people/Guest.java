package com.codeclan.hotelserver.hotelserver.models.people;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="guests")
public class Guest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guestid;

    @JsonIgnoreProperties(value = {"guest","room.bookings"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @OneToMany(mappedBy = "guest", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    private String addressline1;

    @Column
    private String town;

    @Column
    private String postcode;

    @Column
    private String email;

    @Column
    private String phone;

    public Guest(String firstname, String lastname, String addressline1, String town, String postcode, String email, String phone) {
        this.bookings = new ArrayList<Booking>();
        this.firstname = firstname;
        this.lastname = lastname;
        this.addressline1 = addressline1;
        this.town = town;
        this.postcode = postcode;
        this.email = email;
        this.phone = phone;
    }

    public Guest() {
    }

    public Long getGuestid() {
        return guestid;
    }

    public void setGuestid(Long guestid) {
        this.guestid = guestid;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAddressline1() {
        return addressline1;
    }

    public void setAddressline1(String addressline1) {
        this.addressline1 = addressline1;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
