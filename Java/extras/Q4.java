// save this program as Q4.java

import java.lang.*;
import java.util.ArrayList;
import java.util.Scanner;

class Product {

  private String name;
  private int productId;
  private float price;

  //  Constructor
  Product(String name, int pid, float mrp) {
    this.name = name;
    this.productId = pid;
    this.price = mrp;
  }

  //  Methods
  public void printProductDetails(){
    System.out.println("\n---------------------------\n");
    System.out.println("Name of product: " + name +
                       "\nProduct ID: " + productId +
                       "\nReduced price (by 5%): " + reducePrice(5)
                      );
  }

  public float reducePrice(int percentage){
    
    float deduct = percentage*this.price/100;
    return this.price-deduct; // reduced price 
  }
  
}
//  Ends Product

public class Q4{

  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    String pname;
    int pid;
    float cost;

    // input 3 attributes
    System.out.println("\nEnter name of product: ");
    pname = s.nextLine();
    System.out.println("\nEnter Product ID: ");
    pid = s.nextInt();
    System.out.println("\nEnter Product price:");
    cost = s.nextFloat();    

    Product prod = new Product(pname, pid, cost);
    prod.printProductDetails();

    System.exit(0);
  }
}