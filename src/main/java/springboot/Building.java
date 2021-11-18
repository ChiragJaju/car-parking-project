package springboot;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Building
{
    ArrayList<User> users = new ArrayList<>();
    ArrayList<Car> cars = new ArrayList<>();
    ArrayList<User> waitingList = new ArrayList<>();
    private final int charge = 25;
    private final int confBook=100;
    ArrayList<Worker> workers = new ArrayList<>();
    ArrayList<ParkingLot> parkingLot = new ArrayList<>();
    String location;
    float latitude,longitude;
    // public boolean canAdd(User user)
    // {
    //     return true && true;
    // }
    public boolean already_exists(User x)
    {
        for (User user : users) {
            if (user.u_name.equals(x.u_name)) {
                return false;
            }
            if (user.email.equals(x.email)) {
                return false;
            }
            if (user.mobile.equals(x.mobile)) {
                return false;
            }
        }
        return true;
    }

    public Building(String location,float x,float y)
    {
        this.location=location;
        this.latitude =x;
        this.longitude=y;
    }
    public boolean canAdd(User user) {
        return true;
    }
    public String json() throws JsonProcessingException {
        com.fasterxml.jackson.databind.ObjectMapper Obj = new ObjectMapper();
        return Obj.writeValueAsString(this);
    }
    public ArrayList<ParkingLot> getParkingLot(String in,String out,String date) throws ParseException {
        SimpleDateFormat parser = new SimpleDateFormat("HH:mm");
        Date checkIn = parser.parse(in);
        Date checkOut = parser.parse(out);
        ArrayList<ParkingLot> data= new ArrayList<ParkingLot>();
        for(ParkingLot i:parkingLot)
        {
            for(Ticket k:i.tickets)
            {
                if(i.isfree(checkIn,checkOut))
                {
                    data.add(i);
                }
            }
        }
        return data;
    }

    public String getSlots(String checkIn, String checkOut, String date) {
        return checkIn;
    }
}
