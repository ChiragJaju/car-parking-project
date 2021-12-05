package backend;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Ticket {
    public int slotNumber;
    public String location;
    public String checkIn;
    public String checkOut;
}
























