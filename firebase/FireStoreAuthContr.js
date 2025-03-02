import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db, AREAS_REF, USERS_REF } from "./Config";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";

export function useFireAuth(){
    const [user, setUser] = useState();
    const [areas, setAreas] = useState([]);

    useEffect(()=>{
        onAuthStateChanged(auth, user =>  {
            setUser(user);
            if(user){
                const subColRef = collection(db, USERS_REF, user.uid, AREAS_REF );
                onSnapshot(subColRef, querySnapshot => {
                    setAreas(querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    })));
                    
                });
            }
        });
    }, []);

    return [user, areas];
}

export async function signUpUser(email, password, nickname){
    try {
        const userCreds =  await createUserWithEmailAndPassword(auth, email, password);
    
        await setDoc( doc(db, USERS_REF, userCreds.user.uid ), {
            nickname,
            email: userCreds.user.email
        })    
        
    } catch (error) {
        return error.message;
    }
    return null;
}

export async function loginUser(email, password){
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error.message;
    }
    return null;
}

export function logoutUser(){
    signOut(auth)
        .catch(error => console.log(error.message));
}