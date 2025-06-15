import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    // creating user using email and password
    const registerUsingEmailPass = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user using email and password
    const loginUsingEmailPass = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleProvider = new GoogleAuthProvider();
    const loginUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const gitProvider = new GithubAuthProvider();
    const loginUsingGithub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    // logout user
    const logoutUser = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User = ", currentUser);
            setUser(currentUser);
            setIsLoading(false);

        })
        return () => {
            unSubscribe();
        }
    }, [])

    const data = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        registerUsingEmailPass,
        loginUsingEmailPass,
        loginUsingGoogle,
        loginUsingGithub,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;