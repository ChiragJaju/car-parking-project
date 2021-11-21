package springboot;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import firebase4j.error.FirebaseException;
import firebase4j.service.Firebase;
import org.springframework.boot.autoconfigure.info.ProjectInfoProperties;
import org.springframework.stereotype.Repository;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import com.google.gson.Gson;
@Repository
public class UserDAO {
    String firebase_baseUrl = "https://oops-d07bb-default-rtdb.asia-southeast1.firebasedatabase.app/";
    String firebase_apiKey = "AIzaSyDzCSoGGjY2b92wXOH0IzZx4ylTCs4aJbc";
    Firebase firebase = new Firebase( firebase_baseUrl );
    ParkingSystem parking=new ParkingSystem();
    public UserDAO() throws FirebaseException {
    }
        public String getAllEmployees(String location) throws FirebaseException, UnsupportedEncodingException {
        return firebase.get(location+"/USERS").getRawBody();
    }
    public String addUser(User user,String location,String jsonData) throws FirebaseException, UnsupportedEncodingException, JsonProcessingException, firebase4j.error.JacksonUtilityException {
        String jsonStr="";
        com.fasterxml.jackson.databind.ObjectMapper Obj = new ObjectMapper();
        try {
            jsonStr = Obj.writeValueAsString(user);
            System.out.println(jsonStr);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        Building building=parking.getBuilding(location);
        if(building.canAdd(user)) {
            building.addUser(user);
            return "{"+"\"value\":\"Done\""+"}";
        }
        else
            return "{"+"\"value\":\"Failed\""+"}";
    }
}