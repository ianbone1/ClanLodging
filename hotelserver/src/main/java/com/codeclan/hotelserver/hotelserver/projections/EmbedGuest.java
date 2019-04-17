package com.codeclan.hotelserver.hotelserver.projections;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.codeclan.hotelserver.hotelserver.models.people.Guest;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;
import java.util.List;

@Projection(name="embedBooking", types= Guest.class)
public interface EmbedGuest {
    Long getGuestid();
    String getFirstname();
    String getLastname();
    List<Booking> getBookings();
    String getAddressline1();
    String getTown();
    String getPostcode();
    String getEmail();
    String getPhone();
}