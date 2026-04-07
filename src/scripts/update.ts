import { db } from "../firebase.ts";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";

// copy this to run
// node src\scripts\update.ts

const RSVP_EMAIL = "kenttrey68@gmail.com"; // Set the email of the RSVP to update

type Rsvp = {
    id: string;
    name: string;
    email?: string;
    attending: boolean;
    count: number;
    message?: string;
}

async function toggleRsvpAttending() {
  try {
    if (!RSVP_EMAIL) {
      console.error("RSVP_EMAIL is not set. Please set the email at the top of the script.");
      return;
    }

    const rsvpsRef = collection(db, "rsvps");
    const q = query(rsvpsRef, where("email", "==", RSVP_EMAIL));
    const rsvpDocs = await getDocs(q);

    if (rsvpDocs.empty) {
      console.error(`RSVP with an email ${RSVP_EMAIL} not found`);
      return;
    }

    const rsvpDoc = rsvpDocs.docs[0];
    const rsvpData = rsvpDoc.data() as Rsvp;
    const newAttendingStatus = !rsvpData.attending;

    await updateDoc(rsvpDoc.ref, {
      attending: newAttendingStatus,
    });

    console.log(`RSVP for ${RSVP_EMAIL} updated: attending changed from ${rsvpData.attending} to ${newAttendingStatus}`);
  } catch (error) {
    console.error("Error updating RSVP:", error);
  }
}

toggleRsvpAttending();
