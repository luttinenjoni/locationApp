import { auth, db, USERS_REF, AREAS_REF } from './Config'
import { addDoc, collection } from "firebase/firestore";

export function addAreaInfo(areaName, areaDesc, rating){
    const subColRef = collection(db, USERS_REF, auth.currentUser.uid, AREAS_REF);
    addDoc( subColRef, {areaName, areaDesc, rating} )
        .catch(error => console.log(error.message))
}