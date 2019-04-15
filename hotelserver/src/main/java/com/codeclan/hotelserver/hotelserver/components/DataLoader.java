package com.codeclan.hotelserver.hotelserver.components;

import com.codeclan.hotelserver.hotelserver.models.booking.Booking;
import com.codeclan.hotelserver.hotelserver.models.people.Guest;

import com.codeclan.hotelserver.hotelserver.models.people.Staff;
import com.codeclan.hotelserver.hotelserver.models.rooms.Room;
import com.codeclan.hotelserver.hotelserver.models.rooms.RoomType;
import com.codeclan.hotelserver.hotelserver.repositories.BookingRepository;
import com.codeclan.hotelserver.hotelserver.repositories.GuestRepository;
import com.codeclan.hotelserver.hotelserver.repositories.RoomRepository;
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

    @Autowired
    RoomRepository roomRepository;

    public DataLoader() {

    }


    private List<Date> getDatesBetween(Date startDate, int numDays) {
        List<Date> datesInRange = new ArrayList<>();

        Calendar calendar = new GregorianCalendar();
        calendar.setTime(startDate);

        Calendar endCalendar = new GregorianCalendar();
        endCalendar.setTime(calendar.getTime());
        endCalendar.add(Calendar.DATE, (numDays+1));

        while (calendar.before(endCalendar)) {
            Date result = calendar.getTime();
            datesInRange.add(result);
            calendar.add(Calendar.DATE, 1);
        }
        return datesInRange;
    }

    private int nextRoomNumber(int max) {
        Random rand = new Random();
        return (rand.nextInt(max) + 1);
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

        System.out.println("Seeding room numbers:");
        List<Integer> roomNumbers = new ArrayList<Integer>();
        int maxRooms=180;
        for (int i=0; i< maxRooms; i++){
            System.out.print(".");
            boolean ok = false;
            while (!ok){
                int nextDoor = nextRoomNumber(maxRooms);
                if (roomNumbers.contains(nextDoor)) {
                    ok = false;
                }else{
                    roomNumbers.add(nextDoor);
                    ok=true;
                }
            }
        }
        System.out.println();

        System.out.println("Asigning Room Types:");
        List<Room> allRooms=new ArrayList<Room>();

        for (RoomType rt : RoomType.values()){
            System.out.println("\n" + rt);
            double rate=0.0;
            switch (rt) {
                case SINGLE:
                    rate = 99.0;
                    break;
                case TWIN:
                    rate = 140.00;
                    break;
                case DOUBLE:
                    rate = 130.00;
                    break;
                case FAMILY:
                    rate = 210.0;
                    break;
                default:
                    rate=150.0;
            }
            for (int x = 0; x<(maxRooms/4); x++){
                int next=roomNumbers.remove(0);
                Room theRoom=new Room(next,rt, rate);
                roomRepository.save(theRoom);
                allRooms.add(theRoom);
                System.out.print(".");
                if (roomNumbers.size()==0){
                    break;
                }
            }
        }
        System.out.println();

        Room room1 = allRooms.get(1);
        System.out.println("Room 1 ID: " +room1.getRoomID() + " RoomNumber: "+  room1.getRoomNumber() +" "+ room1.getRoomType());
        Room room2 = allRooms.get(47);
        System.out.println("Room 2 ID: " +room2.getRoomID() + " RoomNumber: "+  room2.getRoomNumber() +" "+ room2.getRoomType());
        Room room3 = allRooms.get(120);
        System.out.println("Room 3 ID: " +room3.getRoomID() + " RoomNumber: "+  room3.getRoomNumber() +" "+ room3.getRoomType());

        System.out.println("Rooms seeded.");

        System.out.print("Seeding Bookings");
        Date startDate1 = new SimpleDateFormat("dd-MM-yyyy").parse("27-05-2019");
        int numDays1 = 10;
        List<Date> dateList1 = this.getDatesBetween(startDate1, numDays1);
        Booking booking1 = new Booking(guest1 ,room1 ,dateList1,2,false,false);
        bookingRepository.save(booking1);
        System.out.print(".");

        Date startDate1b = new SimpleDateFormat("dd-MM-yyyy").parse("27-06-2019");
        int numDays1b = 5;
        List<Date> dateList1b = this.getDatesBetween(startDate1b, numDays1b);
        Booking booking1b = new Booking(guest1 ,room1 ,dateList1b,2,false,false);
        bookingRepository.save(booking1b);
        System.out.print(".");



        Date startDate2 = new SimpleDateFormat("dd-MM-yyyy").parse("29-05-2019");
        int numDays2 = 4;
        List<Date> dateList2 = this.getDatesBetween(startDate2, numDays2);
        Booking booking2 = new Booking(guest2 ,room2,dateList2,2,false,false);
        bookingRepository.save(booking2);
        System.out.print(".");

        Date startDate3 = new SimpleDateFormat("dd-MM-yyyy").parse("30-05-2019");
        int numDays3 = 10;
        List<Date> dateList3 = this.getDatesBetween(startDate3, numDays3);
        Booking booking3 = new Booking(guest3 ,room3 ,dateList3,2,false,false);
        bookingRepository.save(booking3);
        System.out.print(".");


        System.out.println("\nFinished Seeding The Database");

    }

}
