#

---


## 🌀 Node.js Event Loop Diagram

Below is a simplified diagram showing how Node.js handles blocking vs non-blocking operations:

```
+------------------+       +------------------+
|  Call Stack      | <---> |  Event Loop      |
+------------------+       +------------------+
        |                          |
        v                          v
+------------------+       +------------------+
|  Blocking Task   |       |  Non-Blocking I/O|
|  (e.g. readFileSync)     |  (e.g. readFile) |
+------------------+       +------------------+
        |                          |
        v                          v
+------------------+       +------------------+
|  Waits & Blocks  |       |  Callback Queue  |
+------------------+       +------------------+
                                |
                                v
                      +------------------+
                      | Executes when    |
                      | stack is clear   |
                      +------------------+
```

> 🧠 **Tip**: In real-world applications, non-blocking code ensures the event loop stays free to handle incoming requests, making Node.js highly scalable.

---
