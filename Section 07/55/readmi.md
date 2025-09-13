
# 📚 Adding Foreign Key Relationships: Authors and Books

In relational databases, **foreign key constraints** ensure data integrity by enforcing a relationship between two tables. In this example, we'll create a one-to-many relationship between `authors` and `books` — where each author can write multiple books, but each book is written by only one author.

---

## 🧱 Database Schema Overview

- **authors**: Stores information about each author.
- **books**: Stores information about books, each linked to an author via a foreign key.

```

authors (id, name, email)
books (id, title, publication\_year, author\_id)

````

---

## 🛠️ Step-by-Step: Creating the Tables

### 1. Create the `authors` Table

```sql
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);
````

### 2. Create the `books` Table with a Foreign Key

```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    publication_year INT,
    author_id INT NOT NULL,
    CONSTRAINT fk_author
        FOREIGN KEY(author_id)
        REFERENCES authors(id)
        ON DELETE CASCADE
);
```

---

## 🔗 Explanation of the Foreign Key

```sql
FOREIGN KEY(author_id) REFERENCES authors(id)
```

* Ensures that `author_id` in `books` **must match an existing** `id` in `authors`.
* Prevents insertion of a book with a non-existent author.
* Maintains **referential integrity**.

### Cascade Options

* `ON DELETE CASCADE`: If an author is deleted, all their books are automatically deleted.
* Other options:

  * `ON DELETE SET NULL`
  * `ON DELETE RESTRICT`
  * `ON DELETE NO ACTION`

---

## 🧪 Inserting Sample Data

```sql
-- Insert authors
INSERT INTO authors (name, email) VALUES
('George Orwell', 'orwell@example.com'),
('Jane Austen', 'austen@example.com');

-- Insert books
INSERT INTO books (title, publication_year, author_id) VALUES
('1984', 1949, 1),
('Animal Farm', 1945, 1),
('Pride and Prejudice', 1813, 2);
```

---

## 🔍 Querying with JOIN

```sql
SELECT b.title, b.publication_year, a.name AS author
FROM books b
JOIN authors a ON b.author_id = a.id;
```

✅ Output:

| Title               | Year | Author        |
| ------------------- | ---- | ------------- |
| 1984                | 1949 | George Orwell |
| Animal Farm         | 1945 | George Orwell |
| Pride and Prejudice | 1813 | Jane Austen   |

---

## 🧹 Modifying and Dropping Relationships

### Drop the Foreign Key Constraint

```sql
ALTER TABLE books DROP CONSTRAINT fk_author;
```

### Add it Again (if needed)

```sql
ALTER TABLE books
ADD CONSTRAINT fk_author
FOREIGN KEY(author_id)
REFERENCES authors(id)
ON DELETE CASCADE;
```

---

## ✅ Summary

| Concept                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| **Foreign Key**           | Links child table (`books`) to parent (`authors`)     |
| **Referential Integrity** | Ensures `author_id` in `books` exists in `authors`    |
| **ON DELETE CASCADE**     | Automatically deletes books when an author is deleted |
| **JOINs**                 | Combine data from related tables in queries           |

---

By establishing proper foreign key relationships, your PostgreSQL database becomes more structured, reliable, and easier to query with confidence.
