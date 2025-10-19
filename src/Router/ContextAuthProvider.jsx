import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const ContextAuthProvider = ({children}) => {

    const [user, setUser] = useState(null, {
        // name: 'hablu mia',
        // email: 'hablu@mia.com',
    });

    const [loading, setLoading] = useState(true)

    console.log(user, loading)

    // signUp/Register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signIn/Login
    const signIn = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Update a user's profile
    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }


    // signOut/LogOut
    const logOut = ()=>{
        return signOut(auth)
    };

    // Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading, 
        setLoading,
        updateUser
    }

    return (
        <div>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default ContextAuthProvider;


