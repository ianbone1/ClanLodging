package com.codeclan.hotelserver.hotelserver.controllers;

import com.codeclan.hotelserver.hotelserver.models.people.Staff;
import com.codeclan.hotelserver.hotelserver.repositories.StaffRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/staffs")
public class StaffController {
    @Autowired
    StaffRepository staffRepository;

    @GetMapping("/lastname/{lastname}")
    public List<Staff> findAllStaffByLastName(@PathVariable String lastname){
        return staffRepository.findAllStaffByLastName(lastname);
    }

}