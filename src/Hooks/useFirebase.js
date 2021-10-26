import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // Sign in with google 
    const signInUsingGoogle = () => {

        return signInWithPopup(auth, provider)

    }
    // Sign out function
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                // Sign-out successful.
            })
    }
    // Observe whether user auth state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])


    return {
        user,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;