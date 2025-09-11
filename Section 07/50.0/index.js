import { db } from "./db/index.js";
import { users } from "./drizzle/schema.js";

async function create({ id, name, email }) {
  try {
    await db.insert(users).values({ id, name, email });
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

async function getAllData() {
  try {
    const allUsers = await db.select().from(users);
    console.log("Fetched users:", allUsers);
    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

(async () => {
  await create({ id: 1, name: "Aminul", email: "Test@gmail.com" });
  await getAllData();
})();
