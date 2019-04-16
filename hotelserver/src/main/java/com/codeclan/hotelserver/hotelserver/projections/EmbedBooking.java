package com.codeclan.hotelserver.hotelserver.projections;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.codeclan.hotelserver.hotelserver.models.rooms.Room;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="EmbedBooking", types= Booking.class)
public interface EmbedBooking {
    Long getBookingid();
    List<Booking> getBookngdates();
//    int getRoomNumber();
}
