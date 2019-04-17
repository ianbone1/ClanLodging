package com.codeclan.hotelserver.hotelserver.projections;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.codeclan.hotelserver.hotelserver.models.people.Guest;
import com.codeclan.hotelserver.hotelserver.models.rooms.Room;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name="embedBooking", types= Booking.class)
public interface EmbedBookingDetails {
        Long getBookingid();
        List<Date> getBookingdates();
        Guest getGuest();
        Room getRoom();
        Boolean getCheckedin();
        Boolean getBillpaid();
        int getPartysize();
    }
