import { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../services/credenciaisFirebase";

const useFirebase = () => {
  const [loading, setLoading] = useState(false);

  const addUser = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "pessoa"), data);
    } finally {
      setLoading(false);
    }
  };

  const addCar = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "carro"), data);
    } finally {
      setLoading(false);
    }
  };

  const fetchCars = async () => {
    const snapshot = await getDocs(collection(db, "carro"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const deleteCar = async (id) => {
    await deleteDoc(doc(db, "carro", id));
  };

  const getCarById = async (id) => {
    const document = await getDoc(doc(db, "carro", id));
    return document.data();
  };

  return { addUser, addCar, fetchCars, deleteCar, getCarById, loading };
};

export default useFirebase;
