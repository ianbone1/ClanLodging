package com.codeclan.hotelserver.hotelserver.components;

import com.codeclan.hotelserver.hotelserver.models.people.Guest;

import com.codeclan.hotelserver.hotelserver.models.people.Staff;
import com.codeclan.hotelserver.hotelserver.repositories.GuestRepository;
import com.codeclan.hotelserver.hotelserver.repositories.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    GuestRepository guestRepository;

    @Autowired
    StaffRepository staffRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Guest guest1 = new Guest("Ian","Bone","Renfrew Street", "Glasgow", "G20", "ianbone@codeclan.com", "07884778888");
        guestRepository.save(guest1);

        Guest guest2 = new Guest("Neil","Watkins","Renfrew Street", "Glasgow", "G20", "neilwatkins@codeclan.com", "07884779999");
        guestRepository.save(guest2);

        Guest guest3 = new Guest("Kyle","Johnston","Renfrew Street", "Glasgow", "G20", "kylejohnston@codeclan.com", "07884770000");
        guestRepository.save(guest3);

        Staff staff1 = new Staff("Sponge","Bob","Renfrew Street", "Bikini Bottom", "G20", "spongebob@codeclan.com", "07884778888", "Front Desk");
        staffRepository.save(staff1);

        Staff staff2 = new Staff("Patrick","Starfish","Renfrew Street", "Bikini Bottom", "G20", "patrick@codeclan.com", "07884779999", "Front Desk");
        staffRepository.save(staff2);

        Staff staff3 = new Staff("Squidward","Squid","Renfrew Street", "Bikini Bottom", "G20", "squidward@codeclan.com", "07884770000", "Front Desk");
        staffRepository.save(staff3);


        System.out.println("Finished Seeding The Database");

    }

}
