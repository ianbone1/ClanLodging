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

    @GetMapping("/lastname/{lastname}")
    public List<Guest> findAllGuestByLastName(@PathVariable String lastname){
        return guestRepository.findAllGuestByLastName(lastname);
    }
    //@GetMapping("/region/{region}")
//    public List<Whisky> getAllWhiskeyByRegion(@PathVariable String region){
//        return whiskyRepository.getAllWhiskeyByRegion(region);
//    }

//    @GetMapping(value="/")
//    public List<Guest> getAllGuests() {
//        return guestRepository.findAll();
//    }

}
