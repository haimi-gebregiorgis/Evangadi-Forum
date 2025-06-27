const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // MAMP's default MySQL password is 'root'
  database: process.env.DB_DATABASE, // Replace with your actual DB name
  port: 8889, // ⚠️ MAMP uses 8889 for MySQL (not 3306)
  connectionLimit: 10,
});

// dbConnection.execute("SELECT 'MAMP Test OK' AS result", (err, results) => {
//   if (err) {
//     console.error("MAMP DB connection failed:", err);
//   } else {
//     console.log("MAMP DB connection successful:", results);
//   }
// });

module.exports = dbConnection.promise();
