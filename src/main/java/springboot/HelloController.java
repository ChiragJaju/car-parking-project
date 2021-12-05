package springboot;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.codehaus.jackson.map.JsonSerializer;
import org.springframework.web.bind.annotation.*;
import springboot.inputclasses.Users;

import springboot.inputclasses.locations;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HelloController {
    static com.fasterxml.jackson.databind.ObjectMapper Obj = new ObjectMapper();
    public UserDAO dao = new UserDAO();

    public HelloController() throws firebase4j.error.FirebaseException {
    }
//    @PostMapping("/user/add/{location}")
//    public String addUser(@RequestBody String jsonData, @PathVariable String location) throws firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException, firebase4j.error.JacksonUtilityException {
//        System.out.println(jsonData);
//        User user= new Gson().fromJson(jsonData,User.class);
//        return dao.addUser(user,location,jsonData);
//    }
    @GetMapping("/login")
    public String login(@RequestBody Map<String,String> data) throws JsonProcessingException {
        User user=Building.login(data.get("username"),data.get("pwd"));
        if(user== null) {
            return "{"+"\"value\":\"Failed\""+"}";
        }
        else return Obj.writeValueAsString(user);
    }
    @PostMapping("/otp/{email}")
    public String otp(@PathVariable String email) throws IOException {
        Mailer k = new Mailer();
        k.sendMail(email,"OTP: 3469");
        return "{"+"\"value\""+"\"Done\""+"}";
    }
    @PostMapping("/update/users")
    public String datalocations(@RequestBody String data) throws firebase4j.error.JacksonUtilityException, firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException {
        Users p= new Gson().fromJson(data,Users.class);
        Building.users=p.users;
        Application.update();
        return "Done";
    }
    @PostMapping("/update")
    public String update_users(@RequestBody String data) throws firebase4j.error.JacksonUtilityException, firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException
    {
        locations p= new Gson().fromJson(data, locations.class);
        Application.k.DataLocations=p.data;
        Application.update();
        return "Done";
    }
    @PostMapping("/confirm")
    public String confirm(@RequestBody Map<String,String> data) throws IOException {
        Mailer k = new Mailer();
        k.confirmMail(data.get("email"),data.get("checkin"),data.get("checkout"));
        return "Done";
    }
}