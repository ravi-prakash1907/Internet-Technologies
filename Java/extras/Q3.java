// save this program as Q3.java

import java.lang.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;


public  class Q3 {
  public static void main(String[] args) {
    
    int num, min, max = 0;
    ArrayList<Integer> arr = new ArrayList<Integer>();
    Scanner s = new Scanner(System.in);

    // Insertion
      System.out.println("Enter 10 the elements:");

      for (int i = 0; i < 10; i++) {
          num = s.nextInt();
          arr.add(num);
      }

      min = Collections.min(arr);
      max = Collections.max(arr);

    // Output
      System.out.println("Minimum: " + min + "  ");
      System.out.println("Maximum: " + max + "  \n");

    System.exit(0);
  }
}