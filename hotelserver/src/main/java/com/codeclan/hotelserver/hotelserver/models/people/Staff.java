package com.codeclan.hotelserver.hotelserver.models.people;

import javax.persistence.*;

@Entity
@Table(name="staff")
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffid;

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

    @Column
    private String position;

    public Staff(String firstname, String lastname, String addressline1, String town, String postcode, String email, String phone, String position) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.addressline1 = addressline1;
        this.town = town;
        this.postcode = postcode;
        this.email = email;
        this.phone = phone;
        this.position = position;
    }

    public Staff() {
    }

    public Long getStaffid() {
        return staffid;
    }

    public void setStaffid(Long staffid) {
        this.staffid = staffid;
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

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
