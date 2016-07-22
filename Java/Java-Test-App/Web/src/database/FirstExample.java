package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class FirstExample {
   // JDBC driver name and database URL
   static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
   static final String DB_URL = "jdbc:mysql://localhost/movimentosmatematicos";

   //  Database credentials
   static final String USER = "root";
   static final String PASS = "root";
   
   public static String conectar() {
	   Connection conn = null;
	   Statement stmt = null;
	   String retorno = "N‹o tem nada porraaaa";
	      
	   try{
	      //STEP 2: Register JDBC driver

		  retorno += "- s - ";
		      
	      Class.forName(JDBC_DRIVER);
	      
	      conn = DriverManager.getConnection(DB_URL,USER,PASS);
	
	      //STEP 4: Execute a query
	      stmt = conn.createStatement();
	      String sql;
	      sql = "SELECT * FROM tasks";
	      ResultSet rs = stmt.executeQuery(sql);
	
	      //STEP 5: Extract data from result set
	      while(rs.next()){
	         //Retrieve by column name
	    	  retorno += rs.getString("id") + ":" + rs.getString("name") + "<br/>";
	         /*
	    	 int id  = rs.getInt("id");
	         int age = rs.getInt("age");
	         String first = rs.getString("first");
	         String last = rs.getString("last");
	         */
	      }
	      //STEP 6: Clean-up environment
	      rs.close();
	      stmt.close();
	      conn.close();
	   }catch(Exception err){
		   retorno += "erro : " + err.getMessage();
	   }
	   /*
	   }catch(SQLException se){
	      //Handle errors for JDBC
	      se.printStackTrace();
	   }catch(Exception e){
	      //Handle errors for Class.forName
	      e.printStackTrace();
	   }finally{
	      //finally block used to close resources
	      try{
	         if(stmt!=null)
	            stmt.close();
	      }catch(SQLException se2){
	      }// nothing we can do
	      try{
	         if(conn!=null)
	            conn.close();
	      }catch(SQLException se){
	         se.printStackTrace();
	      }//end finally try
	   }//end try
	   */
	   
	   return retorno;
	}//end main
}//end FirstExample