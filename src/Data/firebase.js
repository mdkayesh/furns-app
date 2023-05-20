import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// init the firebase app

initializeApp(firebaseConfig);

// get the storage

// init the services

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

// collection ref

const colRef = collection(db, "products");

// get the data

// filter the data and just the name of akash can add inside of the database

// add document
const addDocument = (object) => {
  addDoc(colRef, {
    ...object,
    createdAt: serverTimestamp(),
  }).catch((err) => {
    console.log(err);
  });
};

// delete document
const deleteDocument = (e) => {
  e.preventDefault();

  const docRef = doc(db, "products", e.target.id.value);

  deleteDoc(docRef)
    .then(() => {
      e.target.reset();
      alert("your document is deleted");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { addDocument, deleteDocument, storage, colRef, db };
