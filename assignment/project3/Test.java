import bean.*;
public class Test { 
public static void main(String args[]) 
    { 
        Player p = new Player(); // object

        //Setters
        p.setNum(10); 
        p.setName("Lionel Andrés Messi Cuccittini");
        p.setSport("Football");

        //Getters
        System.out.println("\nNo. on Jersey: "+p.getNum());
        System.out.println("Name: "+p.getName()); 
        System.out.println("Sport: "+p.getSport()+"\n"); 
    } 
} 