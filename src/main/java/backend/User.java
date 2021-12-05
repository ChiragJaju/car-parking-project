package backend;

import backend.Ticket;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.ArrayList;
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class User {
    public String name, email, username, pwd;
    public double balance;
    public int numberOfVisits;
    public ArrayList<Booking> bookings = new ArrayList<>();
    // User(String k,String m)
    // {
    //     this.l_name=k;
    //     this.email=m;
    //     car_data=new Car("hello");
//    public Ticket parkingTicket;
//    User(String k,String m) {
//        this.name = k;
//        this.email = m;
//    }
//IMPLEMENT EQUALS FUNCTION based on email,username
}




