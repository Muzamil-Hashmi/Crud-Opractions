import React from "react";
import { useState, useEffect } from "react";
import { db } from "./Firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { async } from "@firebase/util";

export default function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "user");

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "user", id);
    const newFields = { age: age + 1 };

    await updateDoc(userDoc, newFields);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age "
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>

      {user.map(() => {
        return (
          <div>
            <h1>Name:{user.name}</h1>
            <h2>Age:{user.age}</h2>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
