import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState()
    const provider = new GoogleAuthProvider();
    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const updateUser = (updatedUser) => {
        console.log(updatedUser);
        return updateProfile(auth.currentUser, updatedUser)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const value = {
        user,
        email,
        loading,
        createUser,
        loginUser,
        googleLogin,
        setUser,
        updateUser,
        setEmail,
        logOut

    }
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}