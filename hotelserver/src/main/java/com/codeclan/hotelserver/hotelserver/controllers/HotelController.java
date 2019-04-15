package com.codeclan.hotelserver.hotelserver.controllers;

import com.codeclan.hotelserver.hotelserver.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/hotels")
public class HotelController {
    @Autowired
    HotelRepository hotelRepository;

}
