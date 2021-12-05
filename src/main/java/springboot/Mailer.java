package springboot;

import com.sendgrid.*;
import java.io.IOException;

public class Mailer {
    public void sendMail(String recMail, String msg) throws IOException {
        String senderMail="trial.sendgrid@gmail.com";
        Email from = new Email(senderMail);
        String subject = "Mail";
        Email to = new Email(recMail);
        Content content = new Content("text/plain", msg);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid("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");
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            throw ex;
        }
    }
    public void confirmMail(String recMail,String checkin,String checkOut) throws IOException{
        String senderMail="trial.sendgrid@gmail.com";
        Email from = new Email(senderMail);
        String subject = "Booking confirmation";
        Email to = new Email(recMail);
        String msg="Thanks for confirming your booking.The checkin time is "+checkin+" and checkout time is "+checkOut;
        Content content = new Content("text/plain",msg);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid("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");
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            throw ex;
        }
    }
}