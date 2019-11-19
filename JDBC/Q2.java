//      EDIT IT

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
        Connection con = DriverManager.getConnection(url, uname, pass);   // throws exceptions    SQLException
        
        CallableStatement cStmt = con.prepareCall("{ call counterProcedure(?) }" );    // can throw SQLException
        cStmt.registerOutParameter(1, Type.INTEGER);

        result = cStmt.executeQuery();
        
        // Main part to COUNT the total rows
        int totalRows = result.getInt(1); // returns current Row Number
        system.out.ptint("Total students = ",+totalRows);

        con.close();
    }
}