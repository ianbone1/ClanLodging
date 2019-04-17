package com.codeclan.hotelserver.hotelserver.controllers;

import com.codeclan.hotelserver.hotelserver.repositories.GuestRepository;
import com.codeclan.hotelserver.hotelserver.models.people.Guest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/guests")
public class GuestController {
    @Autowired
    GuestRepository guestRepository;

    @GetMapping("/")
    public List<Guest> findAll() {
        return guestRepository.findAll();
    }

    @GetMapping("/lastname/{lastname}")
    public List<Guest> findAllGuestByLastname(@PathVariable String lastname){
        return guestRepository.findAllGuestByLastname(lastname);
    }

}
