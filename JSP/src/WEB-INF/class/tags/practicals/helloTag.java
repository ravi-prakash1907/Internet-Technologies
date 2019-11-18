package tags.practicals;

import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;

public class helloTag extends SimpleTagSupport {
   private String name;

   public void setName(String n) {
      this.name = n;
   }
   
   public void doTag() throws JspException, IOException {
    // attribute value
    JspWriter out = getJspContext().getOut();
    out.println( "Hello " + name );
   }
}