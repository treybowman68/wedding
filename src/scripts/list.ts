import { db } from "../firebase.ts";
import { collection, getDocs } from "firebase/firestore";

// node src\scripts\list.ts

type Rsvp = {
    id: string;
    name: string;
    email?: string;
    attending: boolean;
    count: number;
    message?: string;
}

async function getRsvps() {
  try {
    const rsvpsDocs = await getDocs(collection(db, "rsvps"));

    const rsvps: Rsvp[] = [];

    rsvpsDocs.forEach((doc) => {
      rsvps.push({
        id: doc.id,
        ...doc.data() as Omit<Rsvp, "id">,
      });
    });

    console.log("RSVPs:", rsvps);
    return rsvps;
  } catch (error) {
    console.error("Error fetching RSVPs:", error);
  }
}

getRsvps();