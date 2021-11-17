package springboot;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

@RestController
public class HelloController {

    @GetMapping("/user")
    public String index() {
        User p= new User("1234","37863");
        String jsonStr="";
        com.fasterxml.jackson.databind.ObjectMapper Obj = new ObjectMapper();
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
    public String addUser(@RequestBody String jsonData, @PathVariable String location) throws firebase4j.error.FirebaseException, UnsupportedEncodingException {
        System.out.println(jsonData);
        User user= new Gson().fromJson(jsonData,User.class);
        UserDAO p = new UserDAO();
        return p.addUser(user,location,jsonData);
    }
}