
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Select form
const form = document.querySelector("#rsvp-form") as HTMLFormElement;

// Submit handler
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    attending: formData.get("attending") === "on",
    count: Number(formData.get("count")),
    message: formData.get("message"),
    createdAt: new Date(),
  };

  try {
    await addDoc(collection(db, "rsvps"), data);
    alert("RSVP submitted!");
    form.reset();
  } catch (error) {
    console.error("Error adding RSVP:", error);
    alert("Something went wrong. Try again.");
  }
});