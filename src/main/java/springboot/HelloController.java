package springboot;

import backend.Building;
import backend.Mailer;
import backend.ParkingSystem;
import backend.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;
import inputclasses.Users;

import inputclasses.locations;

import inputclasses.workers;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.Random;

@RestController
@CrossOrigin("http://localhost:3000")
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
//    @GetMapping("/login")
//    public String login(@RequestBody Map<String,String> data) throws JsonProcessingException {
//        User user= Building.login(data.get("username"),data.get("pwd"));
//        if(user== null) {
//            return "{"+"\"value\":\"Failed\""+"}";
//        }
//        else return Obj.writeValueAsString(user);
//    }
    @PostMapping("/otp/{email}")
    public String otp(@PathVariable String email) throws IOException {
        Mailer k = new Mailer();
        Random rand = new Random();
        int rand_int1 = rand.nextInt(100000);
        k.sendMail(email,String.valueOf(rand_int1));
        return String.valueOf(rand_int1);
    }
    @PostMapping("/update/users")
    public String datalocations(@RequestBody String data) throws firebase4j.error.JacksonUtilityException, firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException {
        Users p= new Gson().fromJson(data,Users.class);
        Application.k.users=p.data;

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
//    @GetMapping("/update")
//    public String update_users() throws firebase4j.error.JacksonUtilityException, firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException
//    {
//        String data=Application.k.getFirebase();
//        Application.k=new Gson().fromJson(data, ParkingSystem.class);
//        Application.k.DataLocations=p.data;
//        ;
//        return "Done";
//    }
    @PostMapping("/update/workers")
    public String update_workers(@RequestBody String data)
    {
        workers p = new Gson().fromJson(data,workers.class);
        Application.k.workers_global=p.data;
        return "Done";
    }
    @PostMapping("/confirm")
    public String confirm(@RequestBody Map<String,String> data) throws IOException {
        Mailer k = new Mailer();
        k.confirmMail(data.get("email"),data.get("checkin"),data.get("checkout"));
        return "Done";
    }
//    @GetMapping("/update/users")
//    public String sendUsers()
//    {
//        workers p=new workers();
//        p.data= Building.workers_global;
//
//    }
}