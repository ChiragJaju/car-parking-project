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
        for(Ticket i :tickets)
        {
            if((checkIn.after(i.S_time) && checkOut.before(i.E_time)) ||checkIn.before(i.S_time) && checkOut.after(i.E_time))
            {
                return false;
            }

        }
        return true;
    }
}
