import mysql from "mysql2";

// ek hi pool banao
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
  port: 3307,
});


pool.getConnection((err, connection) => {
  if (err) {
    console.error("Connection error:", err);
    return;
  }
  console.log("Database connected on port 3307");

  // Always release the connection back to the pool
  connection.release();
});


export default pool;





// // startup pe check karlo
// (async () => {
//   try {
//     const conn = await pool.getConnection();
//     console.log("✅ Database connected!");
//     conn.release();
//   } catch (err) {
//     console.error("❌ Connection error:", err.message);
//   }
// })();