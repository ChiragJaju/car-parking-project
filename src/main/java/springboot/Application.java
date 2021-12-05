package springboot;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {
	static ParkingSystem k=new ParkingSystem();
	public static void main(String[] args) {

		SpringApplication.run(Application.class, args);
	}
	public static void  update() throws firebase4j.error.JacksonUtilityException, firebase4j.error.FirebaseException, UnsupportedEncodingException, JsonProcessingException {
		k.updateFirebase();
	}
	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {

			System.out.println("Let's inspect the beans provided by Spring Boot:");

			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				System.out.println(beanName);
			}

		};
	}

}