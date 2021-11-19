package springboot;

import java.util.ArrayList;
import java.util.Date;

public class ParkingLot
{
    boolean occupied = false;
    String service;
    ArrayList<Ticket> tickets=new ArrayList<>();
    Worker Worker = new Worker();

    public boolean isfree(Date checkIn, Date checkOut) {
        return true;
    }
}
