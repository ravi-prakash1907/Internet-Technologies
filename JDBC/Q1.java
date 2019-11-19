import java.smyql.*;
import java.util.Scanner;

public class Q2 {

    private Scanner s = new Scanner(system.in);
    private String sub;

    private void getSubjectName() {
        system.out.print("Enter the subject name: ");
        this.sub = s.nextLine();
    }

    public static void main(String args) throws Exception {
        String url = "jdbc:mysql://localhost/database";
        String uname = "root";
        String pass = "";

        Statement stmt;

        Class.forName(com.mysql.jdbc.Driver);
        Connection con = DriverManager.getConnection(url, uname, pass);


        private ResultSet readyRes(String q) {
            stmt = con.createStatement();
            Result result = this.stmt.executeQuery(q);
            return result;
        }
        ////////////      Quries      /////////////

        String q1 = "Select COUNT(*) as totalStudentas from Students";       // done
        String q2 = "Select AVG( ? ) as average from Result";       // done
        String q3 = "Select Name from Result where totalMarks = MAX(totalMarks)";      // done
        String q4 = "Select Rank, COUNT(*) form result where Rank IN (1, 2, 3) GROUP BY Rank ORDER BY Rank ASC";      // done
        String q5 = "Select Subjects, Name from Result where Marks = MAX(Marks) GROUP BY Subjects"; //
        String q6 = "Select AVG(totalMarks) as average form Student";
        String q7 = "Select Name from Result where totalMarks = ( Select totalMarks from Result where totalMarks IS NOT MAX(totalMarks))";

            ////////////////////////

            ResultSet result;
            
            ///////////////////     for q1      /////////////////////
                result = readyRes(q1);
                
                result.last();
                system.out.ptint("Total students = "+result.getInt("totalStudents"));
                stmt.close();
            ////////////////////////////////////////////////////////////// 
            
            ///////////////////     for q2      /////////////////////
                getSubjectName();

                PreparedStatement pStmt = con.preparedStatement(q2);
                pStmt.setString(1, sub);
                result = Stmt.executeQuery();

                system.out.ptint("Average marks in" + sub + = ": "+result.getInt("average"));
            ////////////////////////////////////////////////////////////// 
            
            ///////////////////     for q3      /////////////////////
                result = readyRes(q3);
                system.out.ptint("Topper = "+result.getString("Name"));
            ////////////////////////////////////////////////////////////// 
            
            ///////////////////     for q4      /////////////////////
                result = readyRes(q4);

                do {
                system.out.ptint("Rank = "+result.getInt("Rank"));
                system.out.ptint("Rank = "+result.getString("Name"));
                } while(result.next());
            ////////////////////////////////////////////////////////////// 
            
            ///////////////////     for q5      /////////////////////
                result = readyRes(q5);

                do {
                system.out.ptint("Subjects = "+result.getInt("Subjects"));
                system.out.ptint("Marks = "+result.getString("Name"));
                } while(result.next());
            ////////////////////////////////////////////////////////////// 
            
            ///////////////////     for q6      /////////////////////
                result = readyRes(q6);
                system.out.ptint("Average marks in" + sub + = ": "+result.getInt("Average"));
            ////////////////////////////////////////////////////////////// 
            
            ///////////////////     for q7      /////////////////////
                result = readyRes(q7);
                system.out.ptint("2nd Highest = "+result.getString("Name"));
            ////////////////////////////////////////////////////////////// 

        con.close();
    }
}