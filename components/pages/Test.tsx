import { useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import BtnTest from "../atoms/Buttons/BtnTest";
import Slidder from "../organisms/Slidder";
import { db } from "../Firebase";
import useAppStore from "../Store";
const Test = () => {
  const count = useAppStore((state) => state.count)
  const collectionRef = collection(db, "users");
  const createUser = (name: string, data: number) => {
    return addDoc(collectionRef, {
      name: name,
      data: data,
    });
  };
  const deleteUser = () => {
    const docToDelete = doc(db, "users", "O4NUvD5nHZZH2UxAsFrG", "name");
    return deleteDoc(docToDelete);
  };
  const updateUser = (newName: string) => {
    const docToUpdate = doc(db, "users", "O4NUvD5nHZZH2UxAsFrG");
    return updateDoc(docToUpdate, {
      name: `${newName}`,
    });
  };
  const updateData= (data:number) => {
    const docToUpdate = doc(db, "users", "O4NUvD5nHZZH2UxAsFrG");
    return updateDoc(docToUpdate, {
      data: data,
    });
  };
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col  items-center overflow-hidden">
      <Slidder />
      <BtnTest />
      <div className="flex space-x-2 items-center justify-center">
        <button
          className="bg-red-300 px-3 py-1 rounded-md "
          onClick={() => deleteUser()}
        >
          Delete
        </button>
        <button
          className="bg-orange-300 px-3 py-1 rounded-md"
          onClick={() => updateData(count)}
        >
         Update: # 
        </button>
        <button
          className="bg-orange-300 px-3 py-1 rounded-md"
          onClick={() => updateUser("Pablo")}
        >
         Update: U 
        </button>
        <button
          className="bg-green-300 px-3 py-1 rounded-md"
          onClick={() => createUser("Pablo", count)}
        >
         Create 
        </button>
      </div>
    </div>
  );
};
export default Test;
