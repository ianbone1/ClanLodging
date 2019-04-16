package com.codeclan.hotelserver.hotelserver.controllers;

import com.codeclan.hotelserver.hotelserver.models.rooms.Room;
import com.codeclan.hotelserver.hotelserver.models.rooms.RoomType;
import com.codeclan.hotelserver.hotelserver.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/rooms")
public class RoomController {
    @Autowired
    RoomRepository roomRepository;

    @GetMapping("/")
    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    @GetMapping("/sorted")
    public List<Room> findAllByOrderByRoomnumberAsc() {
        return roomRepository.findAllByOrderByRoomnumberAsc();
    }


    @GetMapping("/type/{roomtype}")
    public List<Room> findAllRoomByRoomtype(@PathVariable RoomType roomtype) {
        return roomRepository.findAllRoomByRoomtype(roomtype);
    }

    @GetMapping("/room/{roomnumber}")
    public List<Room> findAllRoomByRoomnumber(@PathVariable int roomnumber) {
        return roomRepository.findAllRoomByRoomnumber(roomnumber);
    }

}
