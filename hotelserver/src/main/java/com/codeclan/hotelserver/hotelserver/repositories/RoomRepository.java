package com.codeclan.hotelserver.hotelserver.repositories;

import com.codeclan.hotelserver.hotelserver.models.rooms.Room;
import com.codeclan.hotelserver.hotelserver.models.rooms.RoomType;
import com.codeclan.hotelserver.hotelserver.projections.EmbedBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findAll();
    List<Room> findAllRoomByRoomType(RoomType roomType);
    List<Room> findAllRoomByRoomNumber(int roomNumber);

}
