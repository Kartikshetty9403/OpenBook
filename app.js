// Import required modules
import express from "express";    // Main web framework for building the server
import bodyParser from "body-parser"; // Helps read form data from POST requests
import pg from "pg";                // PostgreSQL library for database connection
import dotenv from "dotenv";       // Loads environment variables from .env file

dotenv.config(); // Load environment variables

// Create an Express app
const app = express();

// Define port
const port = 3000;

// --- DATABASE CONNECTION ---
// pg.Client connects Node.js directly to PostgreSQL
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Connect to the database
db.connect();

// --- MIDDLEWARE ---
// Tells Express to use bodyParser for form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serves static files (CSS, images, JS) from "public" folder
app.use(express.static("public"));

// Tell Express to use EJS as the templating engine
app.set("view engine", "ejs");

// --- ROUTES ---

// Home page route (GET request)
app.get("/", async (req, res) => {
  try {
    // Get all books from database
    const result = await db.query("SELECT * FROM books ORDER BY id ASC");
    const books = result.rows; // rows = actual data from DB

    // Render index.ejs and pass "books" data to it
    res.render("index", { books: books });
  } catch (err) {
    console.error(err);
    res.send("Error fetching books from database");
  }
});

// Add book route (POST request)
app.post("/add", async (req, res) => {
  // Get values from form inputs
  const { title, author, cover_id, review, rating, book_url } = req.body;

  try {
    // Insert new book into the database
    await db.query(
      "INSERT INTO books (title, author, cover_id, review, rating, book_url) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        title,
        author,
        cover_id || null,  // store null if empty
        review || null,    // store null if empty
        rating || null,    // store null if empty
        book_url || null   // store null if empty
      ]
    );
    res.redirect("/"); // After adding, redirect to home
  } catch (err) {
    console.error(err);
    res.send("Error adding book");
  }
});


// --- SERVER START ---
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
