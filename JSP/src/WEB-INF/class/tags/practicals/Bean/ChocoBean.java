package Beans;

import java.io.Serializable;

public class ChocoBean implements Serializable {

    private String texture;

    ChocoBean() {
        this.texture = "";
    }

    public void setTexture(String t) {
       if(t=="Chewy") {
           this.texture = "FiveStar, BarOne";
        } else if(t=="Crunchy") {
            this.texture = "Munch, KitKat";
        }
    }

    public String getTexture(){
        return this.texture;
    }
}
