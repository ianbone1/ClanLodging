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

    @GetMapping("/type/{roomType}")
    public List<Room> findAllRoomByRoomType(@PathVariable RoomType roomType) {
        return roomRepository.findAllRoomByRoomType(roomType);
    }

    @GetMapping("/room/{roomNumber}")
    public List<Room> findAllRoomByRoomNumber(@PathVariable int roomNumber) {
        return roomRepository.findAllRoomByRoomNumber(roomNumber);
    }

}
