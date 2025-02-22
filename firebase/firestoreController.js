import { useEffect, useState } from "react";
import { db, AREAS_REF } from './Config'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export function UseFireAreas(){
    const [areas, setAreas] = useState([])

    useEffect(() => 
    { 

       const q = query(collection(db, AREAS_REF))

       onSnapshot(q, querySnapshot => {
            setAreas( querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            }))
       })

    },[])

    

    return areas;
}