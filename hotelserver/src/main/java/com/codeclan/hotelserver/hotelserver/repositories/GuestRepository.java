package com.codeclan.hotelserver.hotelserver.repositories;

import com.codeclan.hotelserver.hotelserver.models.people.Guest;

import com.codeclan.hotelserver.hotelserver.projections.EmbedGuest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedGuest.class)
public interface GuestRepository extends JpaRepository<Guest, Long> {

    List<Guest> findAll();
    List<Guest> findAllGuestByLastname(String lastName);
}
