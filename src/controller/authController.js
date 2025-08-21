import pool from "../db/connection.js";

// Get home
export const renderHome = (req, res) => {
  res.render("index.ejs");
};

export const loginUser = (req, res) => {
  const { username, password } = req.body;

  // console.log("Received:", username, password);

  let q = "SELECT * FROM users WHERE username=? AND password=?";

  pool.query(q, [username, password], (err, rows) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).send("Internal Server Error");
    }

    console.log("Query result:", rows);

    if (rows.length > 0) {
      res.render("dashboard.ejs", { user: rows[0] });
    } else {
      res.send("Invalid username or password");
    }
  });
};

