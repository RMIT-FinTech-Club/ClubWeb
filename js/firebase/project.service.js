import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./script.js";

const ITEM_PATH = "projects";
const itemCollection = collection(db, ITEM_PATH);

function getItemDocRef(id) {
  return doc(db, ITEM_PATH, id);
}

export async function getAllItems() {
  const q = query(itemCollection);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data());
}

export async function getItemById(id) {
  const docRef = getItemDocRef(id);
  const snapshot = await getDoc(docRef);
  return snapshot.get();
}

// Firestore is schemaless so it is up to front-end to decide which fields to save

export async function createItem(item) {
  const docRef = await addDoc(itemCollection, {
    ...item,
  });
  return { id: docRef.id, ...item };
}

export async function updateItem(id, item) {
  const docRef = getItemDocRef(id);
  await updateDoc(docRef, {
    ...item,
  });
}

export async function deleteItem(id) {
  const docRef = getItemDocRef(id);
  await deleteDoc(docRef);
}
