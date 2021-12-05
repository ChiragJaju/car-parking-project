package backend;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.ArrayList;
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ParkingLot {
    public int number;
    public int floor;
    public String carType;
    public double userRating;
    public ArrayList<Ticket> bookings = new ArrayList<>();

    public boolean isfree(String checkIn, String checkOut) {
        for (Ticket i : bookings) {
            if ((checkIn.compareTo(i.checkIn) > 0 && checkOut.compareTo(i.checkOut) < 0) || checkIn.compareTo(i.checkIn) > 0 && checkOut.compareTo(i.checkIn) < 0) {
                return false;
            }
        }
        return true;
    }
}
