package springboot;

import java.util.ArrayList;
import java.util.Date;

public class ParkingLot
{
    int number;
    int floor;
    String carType;
    double userRating;
    ArrayList<Ticket> bookings = new ArrayList<>();
    public boolean isfree(String checkIn, String checkOut) {
        for(Ticket i :bookings)
        {
            if((checkIn.compareTo(i.checkIn)>0 && checkOut.compareTo(i.checkOut)<0) ||checkIn.compareTo(i.checkIn)>0 && checkOut.compareTo(i.checkIn)<0)
            {
                return false;
            }
        }
        return true;
    }
}
