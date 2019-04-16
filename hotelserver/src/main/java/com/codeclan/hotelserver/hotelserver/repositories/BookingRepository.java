package com.codeclan.hotelserver.hotelserver.repositories;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.codeclan.hotelserver.hotelserver.projections.EmbedBookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedBookingDetails.class)
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findAll();

}
