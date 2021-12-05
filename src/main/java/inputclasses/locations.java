package inputclasses;

import backend.Building;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.ArrayList;
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class locations {
    public ArrayList<Building> data = new ArrayList<>();
}
