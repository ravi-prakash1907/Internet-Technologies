import beans.*;
import java.lang.*;
import java.util.Scanner;

class studentBean {
  Scanner s;
  Student student;

  studentBean() {
    this.s = new Scanner(System.in);
    this.student = new Student();
  }

  public void getInputs(){

    System.out.println("\n\n______________\n" +
                       "\nYour details:\n" +
                       "______________\n" +
                       "\n  Name: " + student.getName() +
                       "\n  Class: " + student.getClasss() +
                       "\n  Roll No.: " + student.getRollNo() +
                       "\n  Age: " + student.getAge() + "\n\n");

  }

  public void setInputs() {

    System.out.println("\nPlease add a User: \n" +
                       "____________________\n" +
                       "\n  Name: ");
    student.setName(s.nextLine());
    System.out.println("\n  Class: ");
    student.setClasss(s.nextLine());
    System.out.println("\n  Roll No.: ");
    student.setRollNo(s.nextLong());
    System.out.println("\n  Age: ");
    student.setAge(s.nextInt());

  }
}

class employeeBean {
  Scanner s;
  Employee employee;

  employeeBean() {
    this.s = new Scanner(System.in);
    this.employee = new Employee();
  }

  public void getInputs(){

    System.out.println("\n\n______________\n" +
                       "\nYour details:\n" +
                       "______________\n" +
                       "\n  Name: " + employee.getName() +
                       "\n  Department: " + employee.getDepartment() +
                       "\n  Designation: " + employee.getDesignation() +
                       "\n  Employee ID: " + employee.getEmpID() +
                       "\n  Experiance: " + employee.getExperiance() +
                       "\n  Salary: " + employee.getSalary() + "\n\n");

  }

  public void setInputs() {

    System.out.println("\nPlease add an Employee: \n" +
                       "____________________\n" +
                       "\n  Name: ");
    employee.setName(s.nextLine());
    System.out.println("\n  Department: ");
    employee.setDepartment(s.nextLine());
    System.out.println("\n  Designation: ");
    employee.setDesignation(s.nextLine());
    System.out.println("\n  Employee ID: ");
    employee.setEmpID(s.nextLong());
    System.out.println("\n  Experiance: ");
    employee.setExperiance(s.nextInt());
    System.out.println("\n  Salary: ");
    employee.setSalary(s.nextLong());

  }
}

public class Q1 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    // studentBean std;
    // std = new studentBean();
    //
    // std.setInputs();
    // std.getInputs();


    employeeBean emp;
    emp = new employeeBean();

    emp.setInputs();
    emp.getInputs();
  }
}
