package springboot;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.autoconfigure.info.ProjectInfoProperties;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class ParkingSystem {
    static Map<String, Object> data = new LinkedHashMap<String, Object>();

    public ParkingSystem() {
        Building b1 = new Building("A", 0, 0);
        Building b2 = new Building("B", 1, 0);
        Building b3 = new Building("C", 0, 1);
        Building b4 = new Building("D", 1, 1);
        data.put("A", b1);
        data.put("B", b2);
        data.put("C", b3);
        data.put("D", b4);
    }

    public void addLocation(Building build) {
        data.put(build.location, build);
    }

    public static void updateFirebase() throws JsonProcessingException, firebase4j.error.FirebaseException, firebase4j.error.JacksonUtilityException, UnsupportedEncodingException {
        ObjectMapper k = new ObjectMapper();
        Map<String, Object> update = new HashMap<String, Object>();
        for (Map.Entry mapElement : data.entrySet()) {
            String key = (String) mapElement.getKey();
            String value = k.writeValueAsString(mapElement.getValue());
            update.put(key, value);
        }
        String firebase_baseUrl = "https://oops-d07bb-default-rtdb.asia-southeast1.firebasedatabase.app/";
        String firebase_apiKey = "AIzaSyDzCSoGGjY2b92wXOH0IzZx4ylTCs4aJbc";
        firebase4j.service.Firebase firebase = new firebase4j.service.Firebase(firebase_baseUrl);
        firebase.put(update);
    }
    public Building getBuilding(String location)
    {
        return (Building) data.get(location);
    }
}

