package springboot;

import java.util.ArrayList;

import springboot.*;
public class Building
{
    static ArrayList<User> users = new ArrayList<>();
    ArrayList<Car> cars = new ArrayList<>();
    ArrayList<User> waitingList = new ArrayList<>();
    private final int charge = 25;
    private final int confBook=100;
    ArrayList<Worker> workers = new ArrayList<>();
    ArrayList<ParkingLot> parkingLot = new ArrayList<>();

    // public boolean canAdd(User user) 
    // {
    //     return true && true;
    // }
    public static boolean already_exists(User x)
    {
        for(int i =0;i<users.size();i++)
        {
            if(users.get(i).u_name == x.u_name)
            {
                return false;
            }
            if(users.get(i).email == x.email)
            {
                return false;
            }
            if(users.get(i).mobile == x.mobile)
            {
                return false;
            }
        }
        return true;
    }
    public static void add_user(User x)
    {
        users.add(x);
    }
    public static boolean login(User x)
    {
        for(int i = 0;i<users.size();i++)
        {
            if(users.get(i).u_name == x.u_name)
            {
                if(users.get(i).pwd == x.pwd)
                {
                    return true;
                }
            }
        }
        return false;
    }
    public void add_user_waiting(User x)
    {
        waitingList.add(x);
    }
    public Double Total_cost(String x, String y)
    {
        String begin = x.substring(0,2);
        String end = y.substring(0,2);

        Double z;
        z = (Double.valueOf(x)- Double.valueOf(y))*25;
        
        return z;
    }

}
