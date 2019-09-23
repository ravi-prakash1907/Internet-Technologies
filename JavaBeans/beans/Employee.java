package beans;

import java.io.Serializable;

public class Employee implements Serializable {

    private String name;
    private String department;
    private String designation;
    private long empId;
    private Integer experiance;
    private long salary;

    public Employee() {
      this.name = null;
      this.department = null;
      this.designation = null;
      this.empId = 000000000;
      this.experiance = 0;
      this.salary = 000000000;
    }

    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getDepartment(){
        return this.department;
    }
    public void setDepartment(String department){
        this.department = department;
    }

    public String getDesignation(){
        return this.designation;
    }
    public void setDesignation(String designation){
        this.designation = designation;
    }

    public long getEmpID(){
            return this.empId;
        }
    public void setEmpID(long empId){
            this.empId = empId;
        }

    public Integer getExperiance(){
        return this.experiance;
    }
    public void setExperiance(Integer experiance){
        this.experiance = experiance;
    }

    public long getSalary(){
        return this.salary;
    }
    public void setSalary(long salary){
        this.salary = salary;
    }
}
