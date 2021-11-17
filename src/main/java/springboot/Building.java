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
}
