import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

// const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const goggleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);

    const makeUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }



    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () => {
        return signInWithPopup(auth, goggleProvider);

    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);

        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        login,
        makeUser,
        logOut,
        loading,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;