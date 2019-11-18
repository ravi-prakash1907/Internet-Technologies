package tags.practicals;

import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;
import java.util.*;

public class rev extends SimpleTagSupport {
   private String input;

   public void setInput(String n) {
      StringBuffer sbf = new StringBuffer(n);
      this.input = toString(reverse(sbf));
   }
   
   public void doTag() throws JspException, IOException {
    // attribute value
    JspWriter out = getJspContext().getOut();
    out.println( input );
   }
}