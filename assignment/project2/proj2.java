// string manipulation in java

import java.lang.*;
import java.util.Scanner;

public class proj2 {
  public static void main(String args[]) { 
    
    Scanner inp=new Scanner(System.in);

    String s1=new String("abc");
    StringBuffer s2= new StringBuffer("def");
    String s3;
    String s4;

      System.out.println("\nJava String Manipulation\n_______________________\n");

      System.out.print("\nEnter the srting to concatinate with \'" + s1 + "\': ");
      s3 = inp.nextLine();

      s3=s1.concat(s3);
      System.out.println("\n\"abc\".concat(<Your Srting>):  "+s3);
      System.out.println("\"abc\".equals(\"abc\"):  "+s1.equals("abc")+"\n");

      s2.setCharAt(1,'z');
      System.out.println("\"def\".setChatAt(1,\'z\'):  "+s2);
      s2.setLength(2);
      System.out.println("\"dzf\", after \"dzf\".setLength(2):  "+s2);
      System.out.println("\"dz\".append(\"ddd\"):  "+s2.append("ddd"));
      System.out.println("\"dz\".equals(\"abc\"):  "+s2.equals("abc")+"\n");
  }
}
