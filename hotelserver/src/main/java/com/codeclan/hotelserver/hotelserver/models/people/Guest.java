package com.codeclan.hotelserver.hotelserver.models.people;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="guests")
public class Guest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guestID;

    @JsonIgnoreProperties(value = {"guest","room.bookings"})
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "guest", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String addressLine1;

    @Column
    private String town;

    @Column
    private String postCode;

    @Column
    private String email;

    @Column
    private String phone;

    public Guest(String firstName, String lastName, String addressLine1, String town, String postCode, String email, String phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.addressLine1 = addressLine1;
        this.town = town;
        this.postCode = postCode;
        this.email = email;
        this.phone = phone;
    }

    public Guest() {
    }

    public Long getGuestID() {
        return guestID;
    }

    public void setGuestID(Long guestID) {
        this.guestID = guestID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
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
}
