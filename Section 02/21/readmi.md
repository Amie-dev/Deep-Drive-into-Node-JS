
# 📂 Node.js `fs` Module (File System)

The **`fs` (File System)** module in Node.js allows developers to interact with the file system.  
It provides methods to **create, read, update, delete, and manage files and directories**.

To use it, import the module:

```javascript
const fs = require("fs");
````

---

## 📌 Features of `fs` Module

* Supports **both synchronous and asynchronous** methods.
* Can handle **files** and **directories**.
* Common operations:

  * Create files
  * Read files
  * Update/append content
  * Delete files
  * Rename files
  * Work with directories

---

## 🛠️ Commonly Used Methods

### 1. Reading Files

```javascript
// Asynchronous
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous
const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
```

---

### 2. Writing Files

```javascript
// Overwrites file (or creates if not exists)
fs.writeFile("example.txt", "Hello Node.js!", (err) => {
  if (err) throw err;
  console.log("File written successfully!");
});

// Synchronous
fs.writeFileSync("example.txt", "Hello Sync Node.js!");
```

---

### 3. Appending to Files

```javascript
fs.appendFile("example.txt", "\nAppended text.", (err) => {
  if (err) throw err;
  console.log("Data appended successfully!");
});
```

---

### 4. Deleting Files

```javascript
fs.unlink("example.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully!");
});
```

---

### 5. Renaming Files

```javascript
fs.rename("old.txt", "new.txt", (err) => {
  if (err) throw err;
  console.log("File renamed successfully!");
});
```

---

### 6. Working with Directories

```javascript
// Create a directory
fs.mkdir("myFolder", (err) => {
  if (err) throw err;
  console.log("Directory created!");
});

// Read directory contents
fs.readdir("./", (err, files) => {
  if (err) throw err;
  console.log("Files:", files);
});

// Remove a directory
fs.rmdir("myFolder", (err) => {
  if (err) throw err;
  console.log("Directory removed!");
});
```

---

## ⚡ Sync vs Async in `fs`

* **Asynchronous methods** → Non-blocking, recommended for performance.
* **Synchronous methods** → Blocking, useful for scripts or when execution order matters.

Example:

```javascript
// Async
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("Async:", data);
});
console.log("This runs first!");

// Sync
const data = fs.readFileSync("file.txt", "utf8");
console.log("Sync:", data);
```

---

## 🎯 Conclusion

* The **`fs` module** is essential for file and directory handling in Node.js.
* Always prefer **asynchronous methods** in real applications to avoid blocking the event loop.
* With `fs`, you can perform full **CRUD (Create, Read, Update, Delete)** operations on the file system.
