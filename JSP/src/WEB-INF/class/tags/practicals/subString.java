package tags.practicals;

import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;

public class subString extends SimpleTagSupport {
   private String input;
   private String start;
   private String end;

   protected findIndex(String a, String b) {
       return a.indexOf(b);
   }

   public void setName(String n) {
      this.name = n;
   }
   public void setStart(String s) {
      this.start = s;
   }
   public void setEnd(String e) {
      this.end = e;
   }
   public void doTag() throws JspException, IOException {
    // attribute value


   
   int beg = findIndex(input, start);
   int last = findIndex(input, end);

    JspWriter out = getJspContext().getOut();
    out.println( "Hello " + name.substring(beg, last) );
   }
}