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
    public void updateFirebase() throws JsonProcessingException, firebase4j.error.FirebaseException, firebase4j.error.JacksonUtilityException, UnsupportedEncodingException {
        ObjectMapper k = new ObjectMapper();
        String update = k.writeValueAsString(this);
        System.out.println(update);
        String firebase_baseUrl = "https://oops-d07bb-default-rtdb.asia-southeast1.firebasedatabase.app/";
        String firebase_apiKey = "AIzaSyDzCSoGGjY2b92wXOH0IzZx4ylTCs4aJbc";
        firebase4j.service.Firebase firebase = new firebase4j.service.Firebase(firebase_baseUrl);
        firebase.put(update);
    }
}

