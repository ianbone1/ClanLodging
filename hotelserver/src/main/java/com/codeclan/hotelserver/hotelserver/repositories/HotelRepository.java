package com.codeclan.hotelserver.hotelserver.repositories;

import com.codeclan.hotelserver.hotelserver.models.hotel.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {


}
