package bean; 

public class Player implements java.io.Serializable { 

    private int num; 
    private String name; 
    private String sport;

    public Player() { 
      this.num = 0;
      this.name = null;
      this.sport = null;
    } 

    public void setNum(int num) { 
        this.num = num; 
    } 
    public int getNum() { 
        return num; 
    } 

    public void setName(String name) { 
        this.name = name; 
    } 
    public String getName() { 
        return name; 
    } 
    
    public void setSport(String sport) { 
        this.sport = sport; 
    } 
    public String getSport() { 
        return sport; 
    } 
} 