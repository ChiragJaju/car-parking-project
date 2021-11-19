package springboot;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.codehaus.jackson.map.JsonSerializer;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

@RestController
public class HelloController {
    static com.fasterxml.jackson.databind.ObjectMapper Obj = new ObjectMapper();
    public UserDAO dao = new UserDAO();

    public HelloController() throws firebase4j.error.FirebaseException {
    }

    //creating functions for first module i.e. Log in/Sign up
    @GetMapping("/user")
    public String index() {
        User p= new User("1234","37863");
        String jsonStr="";
        try {
            jsonStr = Obj.writeValueAsString(p);
            System.out.println(jsonStr);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return jsonStr;
    }
    @PostMapping("/user/add/{location}")
    public String addUser(@RequestBody String jsonData, @PathVariable String location) throws firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException {
        System.out.println(jsonData);
        User user= new Gson().fromJson(jsonData,User.class);
        return dao.addUser(user,location,jsonData);
    }
    @GetMapping("/login")
    public String login(@RequestBody String username,@RequestBody String pwd) throws JsonProcessingException {
        User user=Building.login(username,pwd);
        if(user== null) {
            return "{"+"\"value\":\"Failed\""+"}";
        }
        else return Obj.writeValueAsString(user);
    }
    //creating functions for module 2 ie Dashboard
    @GetMapping("/data/slots")
    public String slots(@RequestBody String location,@RequestBody String checkIn, @RequestBody String checkOut,@RequestBody String date) throws firebase4j.error.FirebaseException, UnsupportedEncodingException {
        Building building = dao.parking.getBuilding(location);
        return building.getSlots(checkIn,checkOut,date);
    }


}