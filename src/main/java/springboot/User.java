package springboot;

import java.util.HashMap;

public class User
{
    public String l_name,email,mobile,u_name,pwd;
    public double balance;
    public  Address Addrs;
    public Car car_data;
    
    // User(String k,String m)
    // {
    //     this.l_name=k;
    //     this.email=m;
    //     car_data=new Car("hello");
    public Ticket parkingTicket;
    User(String k,String m) {
        this.l_name = k;
        this.email = m;
        car_data = new Car("hello");
    }
    public String toString()
    {
        return l_name + email + u_name;
    }
//IMPLEMENT EQUALS FUNCTION based on email,username
}




