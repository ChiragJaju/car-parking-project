package backend;

import backend.Building;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ParkingSystem {
    public ArrayList<Building> DataLocations = new ArrayList<>();

    //    public ParkingSystem() {
//        Building b1 = new Building("A", 0, 0);
//        Building b2 = new Building("B", 1, 0);
//        Building b3 = new Building("C", 0, 1);
//        Building b4 = new Building("D", 1, 1);
//        data.put("A", b1);
//        data.put("B", b2);
//        data.put("C", b3);
//        data.put("D", b4);
//    }
    public void updateFirebase() throws JsonProcessingException, firebase4j.error.FirebaseException, firebase4j.error.JacksonUtilityException, UnsupportedEncodingException {
        ObjectMapper k = new ObjectMapper();
        String update = k.writeValueAsString(this);
        String firebase_baseUrl = "https://oops-d07bb-default-rtdb.asia-southeast1.firebasedatabase.app/";
        String firebase_apiKey = "AIzaSyDzCSoGGjY2b92wXOH0IzZx4ylTCs4aJbc";
        firebase4j.service.Firebase firebase = new firebase4j.service.Firebase(firebase_baseUrl);
        firebase.put(update);
    }
}

