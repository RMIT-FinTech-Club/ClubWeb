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

const PROJECT_PATH = "projects";
const projectCollection = collection(db, PROJECT_PATH);

function getProjectDocRef(id) {
  return doc(db, PROJECT_PATH, id);
}

export async function getAllProjects() {
  const q = query(projectCollection);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data());
}

export async function getProjectById(id) {
  const docRef = getProjectDocRef(id);
  const snapshot = await getDoc(docRef);
  return snapshot.get();
}

// Firestore is schemaless so it is up to front-end to decide which fields to save

export async function createProject(project) {
  const docRef = await addDoc(projectCollection, {
    ...project,
  });
  return { id: docRef.id, ...project };
}

export async function updateProject(id, project) {
  const docRef = getProjectDocRef(id);
  await updateDoc(docRef, {
    ...project,
  });
}

export async function deleteProject(id) {
  const docRef = getProjectDocRef(id);
  await deleteDoc(docRef);
}
