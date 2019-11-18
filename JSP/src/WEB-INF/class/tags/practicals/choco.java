package tags.practicals;

import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;
import Bean.*;

public class choco extends SimpleTagSupport {
    ChocoBean ch = new ChocoBean();

   public void doTag() throws JspException, IOException {
    // attribute value
    JspWriter out = getJspContext().getOut();
    out.println( "Hello " + ch.getTexture() );
   }
}