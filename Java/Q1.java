import java.lang.*;
import java.util.ArrayList;
import java.util.Scanner;

class BankAccount {

  private int accountNumber;
  private float balance;

  //  Constructor
  BankAccount(){
    this.accountNumber = 0;
    this.balance = 0.0f;
  }

  //  Methods
  public float Deposit(float x){
    this.balance += x;
    return this.balance; // new balance i.e. updated
  }

  public float Withdraw(float x){
    this.balance -= x;
    return this.balance; // new balance i.e. left
  }

  public int getAccountNo(){
    return this.accountNumber;
  }

  public float getBalance(){
    return this.balance;
  }

  public void taxDeduction(){
    // function to calculate the tax
    //this function is declared here but its defination is missing so the output is not coming please have a look into it
  }


  public void setAccountNo(int x){
    this.accountNumber = x;
  }
}
//  Ends BankAccount

class Bank {
  private int countAccount;
  Scanner s = new Scanner(System.in);

  Bank(){
    countAccount = -1;
  }

  ArrayList<BankAccount> newAcc = new ArrayList<BankAccount>();

  public void addAccount(){
    int acc, choice;
    float money;

    newAcc.add(new BankAccount());
    BankAccount b = newAcc.get(++countAccount);

    System.out.println("\nEnter the new Account No.: ");
    acc = s.nextInt();
    b.setAccountNo(acc);

    do {
        System.out.println("\nMenu:\n" +
                            "\n1) Deposit Money" +
                            "\n2) Withdraw Money" +
                            "\n3) Tax to be Deducted" +
                            "\n  ____________________\n");
        choice = s.nextInt();

        switch (choice) {
          case 1: System.out.println("\nEnter amount (in rs.) to deposit: ");
                  money = s.nextFloat();
                  System.out.println("\nDeposited!\nNew balance: " + b.Deposit(money) + "\n");
                  break;

          case 2: System.out.println("\nEnter amount (in rs.) to withdraw: ");
                  money = s.nextFloat();
                  if(money > b.getBalance())
                    System.out.println("\nNot Sufficient balance. Transaction Failed!!!\n");
                  else
                    System.out.println("\nDeducted " + money + "Rs.!\nBalance left: " + b.Withdraw(money)+ "\n");
                  break;

          case 3: System.out.println("\nTax, to pay: ");
                  b.taxDeduction();
                  break;

          default: System.out.println("\nSigning out of Acc. No. \'" + b.getAccountNo() + "\'");
                   //newAcc.remove(countAccount);
        }
      } while ((choice >= 1) && (choice <= 3));

  }

  public void getBankBalance(){
    BankAccount b;
    float money = 0.0f;

    for (int i = 0; i <= countAccount; i++) {
      b = newAcc.get(i);
      money += b.getBalance();
    }

    System.out.println("\nTotal balance in bank (in rs.): " + money);
  }

  public void peakBalance(){
    BankAccount b;
    float maxB, minB;
    int minAcc, maxAcc;

    b = newAcc.get(0);
    maxB = minB = b.getBalance();
    maxAcc = minAcc = b.getAccountNo();

    for (int i = 1; i <= countAccount; i++) {
      b = newAcc.get(i);

      if (b.getBalance() > maxB){
        maxB = b.getBalance();
        maxAcc = b.getAccountNo();
      }
    }

    for (int i = 1; i <= countAccount; i++) {
      b = newAcc.get(i);

      if (b.getBalance() < minB){
        minB = b.getBalance();
        minAcc = b.getAccountNo();
      }
    }

    System.out.println("\nMaximum balance in (acc.): " + maxAcc +
                       "\nMinimum balance in (acc.): " + minAcc);
  }

  public void findAccount(){
    BankAccount b;

    System.out.println("\n\nEnter bank account no. to search: ");
    int acc = s.nextInt();

    boolean flag = false;

    for (int i = 0; i <= countAccount; i++) {
      b = newAcc.get(i);

      if (b.getAccountNo() == acc){
        flag = true;
        break;
      }
      else {
        flag = false;
        continue;
      }
    }

    if(flag == true)
      System.out.println("\nThe account exists!");
    else
      System.out.println("\nThe account doesn\'t exist!");

    //  <ArrayList_Name>.contains(<ArrayList_Object>)  could also be used
  }

  public void checkSpecificBal(){
    int c = 0;
    System.out.println("\nSpecify the minimum balance(in rs.): ");
    float money = s.nextFloat();

    BankAccount b;

    for (int i = 0; i <= countAccount; i++) {
      b = newAcc.get(i);
      if (b.getBalance() >= money)
        c++;
    }

    System.out.println("\nTotal no. of accounts in bank, having at least " + money + "Rs.: " + c);
  }
}

public class Q1{

  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    Bank bank = new Bank();
    int choice;

    do {
         System.out.println("\nMenu:\n" +
                            "\n1) Add New Account" +
                            "\n2) Total Balance in Bank" +
                            "\n3) Account No. having Maximum and Minimum Balance" +
                            "\n4) Search an Account" +
                            "\n5) Accounts having at least a Specific Balance" +
                            "\n\n*  Somthing else, to EXIT" +
                            "\n  ____________________\n");
        choice = s.nextInt();


        switch (choice) {
          case 1: bank.addAccount();
                  break;

          case 2: bank.getBankBalance();
                  break;

          case 3: bank.peakBalance();
                  break;

          case 4: bank.findAccount();
                  break;

          case 5: bank.checkSpecificBal();
                  break;

          default: break;
        }
    } while (choice <= 5 && choice >= 1);

    System.exit(0);
  }
}
