package springboot;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

public class Building
{
    static ArrayList<User> users = new ArrayList<>();
    ArrayList<Car> cars = new ArrayList<>();
    ArrayList<User> waitingList = new ArrayList<>();
    private final int charge = 25;
    private final int confBook=100;
    ArrayList<Worker> workers = new ArrayList<>();
    ArrayList<ParkingLot> parkingLot = new ArrayList<>();
    String location;
    float latitude,longitude;

//    public static void login(String username, String pwd) {
//    }

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
    public static void add_user(User x)
    {
        users.add(x);
    }
    // public static User login(String x,String y)
    // {
    //     for(int i = 0;i<users.size();i++)
    //     {
    //         if(users.get(i).u_name == x.u_name)
    //         {
    //             if(users.get(i).pwd == x.pwd)
    //             {
    //                 return x;
    //             }
    //         }
    //     }
        
    // }
    public void add_user_waiting(User x)
    {
        waitingList.add(x);
    }
    public Double Total_cost(String x, String y)
    {
        String begin = x.substring(0,2);
        String end = y.substring(0,2);

        Double z;
        z = ((Double.parseDouble(x)- Double.parseDouble(y))*charge)+100;
        
        return z;
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
    public String getSlots(String in, String out) throws ParseException {
        SimpleDateFormat parser = new SimpleDateFormat("dd-M-yyyy hh:mm:ss a");
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
        String ans=new Gson().toJson(data);
        return ans;
    }


    public void addUser(User user) throws firebase4j.error.JacksonUtilityException, firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException {
        users.add(user);
        ParkingSystem.updateFirebase();
    }

}
