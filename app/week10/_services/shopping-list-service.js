import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

//fetch all the items
export const getItems = async (userId) => {
  try {
    const itemsCollectionRef = collection(db, "users",userId, "items");

    const itemSnapshot = await getDocs(itemsCollectionRef);
    const mappedItems = itemSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return mappedItems;

  } catch (error) {
    console.error("Error in getItems: ", error)
   }
  };


  // add an new item
export const addItem = async (item, userId) => {
  try {
    const docRef = await addDoc(collection(db,"users",userId, "items"), item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error)
  }
}