# 🧩 Buffer in Node.js

## 📌 What is a Buffer?

- A **Buffer** in Node.js is a temporary storage space for **binary data**.  
- It is mainly used to handle raw data like **files, streams, network packets**, etc.  
- Buffers are especially important because **JavaScript strings are Unicode-based**, while many system operations deal with **binary data**.

👉 Example: Reading a file or receiving data from a network requires handling **binary streams**, and Node.js uses Buffers for this.

---

## ⚡ Why Buffers are Needed?

1. **Binary Data Handling**  
   - Node.js applications often need to process images, videos, files, or network packets.  
   - Buffers store this raw binary data temporarily.  

2. **Stream Processing**  
   - Buffers are essential for handling data chunks in streams (e.g., reading a file piece by piece).  

3. **Performance**  
   - Buffers make it efficient to deal with large volumes of binary data without converting it to strings.  

---

## 🛠️ Creating Buffers

Node.js provides several ways to create buffers:

```javascript
// 1. Allocate a buffer of size 10 bytes
const buf1 = Buffer.alloc(10);
console.log(buf1);

// 2. Create buffer from array
const buf2 = Buffer.from([72, 101, 108, 108, 111]); // ASCII codes
console.log(buf2.toString()); // Output: Hello

// 3. Create buffer from string
const buf3 = Buffer.from("Node.js");
console.log(buf3); // <Buffer 4e 6f 64 65 2e 6a 73>
console.log(buf3.toString()); // Node.js
```

📊 Key Points

Buffers store raw binary data directly.

They are often used with streams and file I/O operations.

Unlike arrays, Buffers deal with fixed-size binary data.

Default encoding is UTF-8, but others like ASCII, Base64, and Hex are supported.
