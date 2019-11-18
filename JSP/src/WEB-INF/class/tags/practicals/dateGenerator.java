package tags.practicals;

import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;
import java.util.Date;
import java.text.*;

public class dateGenerator extends SimpleTagSupport {   

    Date today = new Date();
    DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
    Date onlyDate = formatter.parse(formatter.format(today));
    
   public void doTag() throws JspException, IOException {
    JspWriter out = getJspContext().getOut();
    out.println( onlyDate );
   }
}