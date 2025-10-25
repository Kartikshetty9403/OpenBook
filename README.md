# BookTracker

A personal book library web app to track books, reviews, ratings, and view Open Library links. Built with Node.js, Express, EJS, and PostgreSQL.

---

## Features

- Add books with title, author, cover image, review, rating, and Open Library URL.
- Display books in a clean card layout with cover images.
- Responsive design with hover effects.
- Links to view books directly on Open Library.

---

## Future Scope

- Add **Update** feature to edit book details.
- Add **Delete** feature to remove books.
- Implement user authentication for multiple users.
- Integrate search and filter functionality.
- Store cover images locally instead of using Open Library API.

---

## Setup Instructions

### Prerequisites

- Node.js installed ([https://nodejs.org/](https://nodejs.org/))
- PostgreSQL installed ([https://www.postgresql.org/](https://www.postgresql.org/))
- Git installed ([https://git-scm.com/](https://git-scm.com/))

---

### Installation

1. Clone the repository:

```bash
1. git clone https://github.com/yourusername/BookTracker.git
2. cd BookTracker

3. Install dependencies:

npm install

Create the PostgreSQL database and table:

Open pgAdmin or psql and run:

4. CREATE DATABASE Bookdb;

 Bookdb

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  cover_id VARCHAR(50),
  review TEXT,
  rating INT,
  book_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

5. Create a .env file with your DB credentials:

DB_USER=your_user
DB_HOST=localhost
DB_NAME=Bookdb
DB_PASSWORD=your_password
DB_PORT=5432


6.  Run the App:
    node app.js

    or using nodemon:

    nodemon app.js

 ---

7. To display cover images and Open Library links correctly, you need the Cover ID and Book URL.

a) Finding Cover ID

Go to Open Library
.

Search for the book you want to add.

Click on the book title to open its page.

Look at the URL of the cover image on the book page, or use the “Covers API”:

Example cover URL:

https://covers.openlibrary.org/b/id/6750321-M.jpg


The number (6750321) is the Cover ID.

You can use small (-S), medium (-M), or large (-L) sizes in your form.

b) Finding the Book URL

On the book page on Open Library, copy the URL from the browser.

Example:

https://openlibrary.org/books/OL24595056M/The_Possessed


Paste this URL in the Book URL field in the form.

c) Tips

Cover ID is optional, but without it the book card will show no image.

Book URL is optional, but without it, the “View on Open Library” link won’t appear.

Using the correct IDs ensures images and links display properly.
