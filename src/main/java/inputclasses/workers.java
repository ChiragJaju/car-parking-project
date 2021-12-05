package inputclasses;

import backend.Worker;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.ArrayList;
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class workers {
    public ArrayList<Worker> data= new ArrayList<>();
}
