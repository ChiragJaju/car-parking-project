package java.inputclasses;

import backend.User;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.ArrayList;
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Users {
    public ArrayList<User> users= new ArrayList<>();
}
