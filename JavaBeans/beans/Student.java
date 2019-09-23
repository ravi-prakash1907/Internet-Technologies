package beans;

import java.io.Serializable;

public class Student implements Serializable {

    private String name;
    private String classs;
    private long rollno;
    private Integer age;

    public Student() {
      this.name = null;
      this.classs = null;
      this.rollno = 000000000;
      this.age = 0;
    }

    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }

    public Integer getAge(){
        return this.age;
    }
    public void setAge(Integer age){
        this.age = age;
    }

    public long getRollNo(){
        return this.rollno;
    }
    public void setRollNo(long rollno){
        this.rollno = rollno;
    }

    public String getClasss(){
        return this.classs;
    }
    public void setClasss(String classs){
        this.classs = classs;
    }
}
