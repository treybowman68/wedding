import { db } from "../firebase.ts";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// node src\scripts\delete.ts

async function deleteAllRsvps() {
  try {
    const rsvpsDocs = await getDocs(collection(db, "rsvps"));

    let deletedCount = 0;

    for (const docSnapshot of rsvpsDocs.docs) {
      await deleteDoc(doc(db, "rsvps", docSnapshot.id));
      deletedCount++;
    }

    console.log(`Successfully deleted ${deletedCount} RSVPs`);
    return deletedCount;
  } catch (error) {
    console.error("Error deleting RSVPs:", error);
  }
}

deleteAllRsvps();
