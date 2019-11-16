import java.mysql.*;

//////////      PROCEDURE       /////////
/*
    DELIMITER $$

    DROP PROCEDURE IF EXISTS `EMP`.`counterProcedure` $$
    CREATE PROCEDURE `EMP`.`counterProcedure`
        (OUT TOTAL_STUDENTS INTEGER)
    BEGIN
        Select COUNT(*)
        INTO TOTAL_STUDENTS
        FROM Students
    END

    DELIMITER ;
*/
////////////////////////////////////////


public class Q2 {
    public static void main(String args) throws Exception {
        String url = "java:mysql//localhost:3306/Result";   // path
        String uname = "root";
        String pass = "";
        ResultSet result;

        Class.forName(com.mysql.jdbc.Driver);   // throws exceptions    DatabaseNotFoundException
        Connection con = DriverManager(url, uname, pass);   // throws exceptions    SQLException
        
        CallableStatement cStmt = con.prepareCall("{ call counterProcedure }", // call counterProcedure (?)  
                                ResultSet.TYPE_SCROLL_SENSITIVE,
                                ResultSet.CONCUR_READ_ONLY);    // can throw SQLException

        // cStmt.registerOutParameter();
        result = cStmt.execute();
        // Main part to COUNT the total rows
        boolean b = result.last();  // moves curseer to the last row
        int totalRows = result.getRow(); // returns current Row Number

        system.out.ptint("Total students = ",+totalRows);

        con.close();
    }
}