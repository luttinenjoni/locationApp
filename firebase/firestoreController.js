import { useEffect, useState } from "react";
import { db, AREAS_REF } from './Config'
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";


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

export function addAreaInfo(areaName, areaDesc, rating){
    addDoc( collection(db, AREAS_REF), {areaName, areaDesc, rating} )
        .catch(error => console.log(error.message))
}