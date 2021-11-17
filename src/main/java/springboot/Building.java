package springboot;

import java.util.ArrayList;

import springboot.*;
public class Building
{
    ArrayList<User> users = new ArrayList<>();
    ArrayList<Car> cars = new ArrayList<>();
    ArrayList<User> waitingList = new ArrayList<>();
    private final int charge = 25;
    private final int confBook=100;
    ArrayList<Worker> workers = new ArrayList<>();
    ArrayList<ParkingLot> parkingLot = new ArrayList<>();

    public boolean canAdd(User user) {
        return true;
    }
}
