package com.codeclan.hotelserver.hotelserver.repositories;

import com.codeclan.hotelserver.hotelserver.models.people.Staff;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {

    List<Staff> findAllStaffByLastName(String lastName);
}
