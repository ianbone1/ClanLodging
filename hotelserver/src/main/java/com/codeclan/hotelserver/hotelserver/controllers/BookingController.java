package com.codeclan.hotelserver.hotelserver.controllers;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.codeclan.hotelserver.hotelserver.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/")
    public List<Booking> findAll() {
        return bookingRepository.findAll();
    }
}
