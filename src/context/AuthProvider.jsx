import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

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

    // logout user
    const logoutUser = () =>{
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
        logoutUser,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;