package backend;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Worker {
    String name;
    int salary;
    String dateOfJoin;
    String username;
    String password;
}
