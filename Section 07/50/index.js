const db = require('./db');
const { userTable } = require('./drizzle/schema');

async function create({ id, name, email }) {
  try {
    await db.insert(userTable).values({ id, name, email });
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

async function getAllData() {
  try {
    const users = await db.select().from(userTable);
    console.log("Fetched users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// ✅ Wrap everything in an async IIFE
(async () => {
  await create({ id: 1, name: "Aminul", email: "Test@gmail.com" });

  // You can also insert directly here if needed
  await db.insert(userTable).values({ name: "Another User", email: "another@example.com" });

  await getAllData();
})();
