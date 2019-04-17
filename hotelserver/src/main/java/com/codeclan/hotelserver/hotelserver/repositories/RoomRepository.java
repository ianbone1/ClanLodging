package com.codeclan.hotelserver.hotelserver.repositories;

import com.codeclan.hotelserver.hotelserver.models.rooms.Room;
import com.codeclan.hotelserver.hotelserver.models.rooms.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findAll();
    List<Room> findAllByOrderByRoomnumberAsc();
    List<Room> findAllRoomByRoomtype(RoomType roomtype);
    List<Room> findAllRoomByRoomnumber(int roomnumber);

}
