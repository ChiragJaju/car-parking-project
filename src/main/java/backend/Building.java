package backend;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.JsonProcessingException;
import springboot.Application;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Building {

    final int charge = 25;
    final int confBook = 100;
    ArrayList<ParkingLot> slots = new ArrayList<>();
    String name;
    String address;
    String owner;
    double userRating;
    ArrayList<Worker> workers = new ArrayList<>();
    ArrayList<String> servicesProvided = new ArrayList<>();
    int maxTime;
////
////    public static void add_user(User x) {
////        users.add(x);
////    }
//
////    public static User login(String u, String p) {
////        for (int i = 0; i < users.size(); i++) {
////            if (users.get(i).username == u) {
////                if (users.get(i).pwd == p) {
////                    return users.get(i);
////                }
////            }
////        }
////        return null;
//
////    }
//
////    public boolean already_exists(User x) {
////        for (User user : users) {
////            if (user.username.equals(x.username)) {
////                return false;
////            }
////            if (user.email.equals(x.email)) {
////                return false;
////            }
////
////        }
////        return true;
////    }
//
//    public Double Total_cost(String x, String y) {
//        String begin = x.substring(0, 2);
//        String end = y.substring(0, 2);
//
//        Double z;
//        z = ((Double.parseDouble(x) - Double.parseDouble(y)) * charge) + 100;
//
//        return z;
//    }
//
//
////    public Building(String location,float x,float y)
////    {
////        this.location=location;
////        this.latitude =x;
////        this.longitude=y;
////    }
////    public boolean canAdd(User user) {
////        return true;
////    }
////    public String json() throws JsonProcessingException {
////        com.fasterxml.jackson.databind.ObjectMapper Obj = new ObjectMapper();
////        return Obj.writeValueAsString(this);
////    }
////    public String getSlots(String in, String out) throws ParseException {
////        SimpleDateFormat parser = new SimpleDateFormat("dd-M-yyyy hh:mm:ss a");
////        Date checkIn = parser.parse(in);
////        Date checkOut = parser.parse(out);
////        ArrayList<ParkingLot> data= new ArrayList<ParkingLot>();
////        for(ParkingLot i:DataLocations)
////        {
////            for(Ticket k:i.tickets)
////            {
////                if(i.isfree(checkIn,checkOut))
////                {
////                    data.add(i);
////                }
////            }
////        }
////        String ans=new Gson().toJson(data);
////        return ans;
////    }


//    public void addUser(User user) throws firebase4j.error.JacksonUtilityException, firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException {
//        users.add(user);
//        Application.update();
//    }

}
