package backend;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Detail {
    public int cost;
    public ParkingLot slot;
    public Building location;
    public InputTime inputtime;
}
