package com.codeclan.hotelserver.hotelserver.components;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.codeclan.hotelserver.hotelserver.models.people.Guest;

import com.codeclan.hotelserver.hotelserver.models.people.Staff;
import com.codeclan.hotelserver.hotelserver.repositories.BookingRepository;
import com.codeclan.hotelserver.hotelserver.repositories.GuestRepository;
import com.codeclan.hotelserver.hotelserver.repositories.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.*;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    GuestRepository guestRepository;

    @Autowired
    StaffRepository staffRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader() {

    }


    private List<Date> getDatesBetween(Date startDate, int numDays) {
        List<Date> datesInRange = new ArrayList<>();

        Calendar calendar = new GregorianCalendar();
        calendar.setTime(startDate);

        Calendar endCalendar = new GregorianCalendar();
        endCalendar.setTime(calendar.getTime());
        endCalendar.add(Calendar.DATE, (numDays+1));

        System.out.println("StartDate =" + calendar.getTime());
        System.out.println("endDate = " + endCalendar.getTime());

        while (calendar.before(endCalendar)) {
            Date result = calendar.getTime();
            datesInRange.add(result);
            calendar.add(Calendar.DATE, 1);
        }

        System.out.println("The date list:");
        for (Date d : datesInRange){
            System.out.println("Date="+d);
        }

        return datesInRange;
    }


    public void run(ApplicationArguments args) throws Exception{

        System.out.println("Seeding guests...");
        Guest guest1 = new Guest("Ian","Bone","Renfrew Street", "Glasgow", "G20", "ianbone@codeclan.com", "07884778888");
        guestRepository.save(guest1);

        Guest guest2 = new Guest("Neil","Watkins","Renfrew Street", "Glasgow", "G20", "neilwatkins@codeclan.com", "07884779999");
        guestRepository.save(guest2);

        Guest guest3 = new Guest("Kyle","Johnston","Renfrew Street", "Glasgow", "G20", "kylejohnston@codeclan.com", "07884770000");
        guestRepository.save(guest3);

        System.out.println("Seeding staff...");
        Staff staff1 = new Staff("Sponge","Bob","Renfrew Street", "Bikini Bottom", "G20", "spongebob@codeclan.com", "07884778888", "Front Desk");
        staffRepository.save(staff1);

        Staff staff2 = new Staff("Patrick","Starfish","Renfrew Street", "Bikini Bottom", "G20", "patrick@codeclan.com", "07884779999", "Front Desk");
        staffRepository.save(staff2);

        Staff staff3 = new Staff("Squidward","Squid","Renfrew Street", "Bikini Bottom", "G20", "squidward@codeclan.com", "07884770000", "Front Desk");
        staffRepository.save(staff3);

        System.out.println("Seeding Bookings...");
        Date startDate1 = new SimpleDateFormat("dd-MM-yyyy").parse("27-05-2019");
        System.out.println("startDate1 = " +  startDate1);
        int numDays1 = 10;
        System.out.println("Calling getDatesBetween...");
        List<Date> dateList1 = this.getDatesBetween(startDate1, numDays1);
        System.out.println("This is the dateList:");
        System.out.println(dateList1);
        Booking booking1 = new Booking(guest1 ,new Long(1),dateList1,2,false,99.99,false);
        System.out.println(booking1);
        System.out.println("About to save booking1");
        bookingRepository.save(booking1);



        System.out.println(booking1);
        System.out.println("Finished Seeding The Database");

    }

}
