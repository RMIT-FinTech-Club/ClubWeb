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

function getDocRef(id) {
  return doc(db, PROJECT_PATH, id);
}

export async function findAll() {
  const q = query(projectCollection);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data());
}

export async function findOneById(id) {
  const docRef = getDocRef(id);
  const snapshot = await getDoc(docRef);
  return snapshot.get();
}

// Firestore is schemaless so it is up to front-end to decide which fields to save

async function create(item) {
  const { name, startDate, endDate, description, slug, coverUrl } = item;
  const dto = {
    name,
    startDate,
    endDate,
    description,
    slug,
    coverUrl,
    members: {},
  };
  const docRef = await addDoc(projectCollection, {
    ...dto,
  });
  return { id: docRef.id, ...item };
}

async function update(id, item) {
  const { name, startDate, endDate, description, slug, coverUrl } = item;
  const dto = { name, startDate, endDate, description, slug, coverUrl };
  const docRef = getDocRef(id);
  await updateDoc(docRef, {
    ...dto,
  });
}

export async function deleteItem(id) {
  const docRef = getDocRef(id);
  await deleteDoc(docRef);
}

async function addMember(projectId, member) {
  const docRef = getDocRef(projectId);
  const { name, email, joinedAt, rewardedToken, role, status, kpi } = member;
  const dto = { name, email, joinedAt, rewardedToken, role, status, kpi };

  await updateDoc(docRef, {
    [`members.${email}`]: dto,
  });
}

async function updateMember(projectId, member) {
  const docRef = getDocRef(projectId);
  const { name, joinedAt, rewardedToken, role, status, kpi } = member;
  const dto = { name, joinedAt, rewardedToken, role, status, kpi };
  const updatedFields = {};
  for (const [key, value] of Object.entries(dto)) {
    if (value === undefined) continue;
    updatedFields[`members.${email}.${key}`] = value;
  }
  await updateDoc(docRef, {
    ...updatedFields,
  });
}

async function removeMember(projectId, email) {
  const docRef = getDocRef(projectId);
  await updateDoc(docRef, {
    [`members.${email}`]: deleteField(),
  });
}

const ProjectService = {
  findAll,
  findOneById,
  create,
  update,
  remove,
  addMember,
  updateMember,
  removeMember,
};

export default ProjectService;
