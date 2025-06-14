import { createContext, useState } from "react";
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    // creating user using email and password
    const registerUsingEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user using email and password
    const loginUsingEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const data = {
        isLoading,
        registerUsingEmailPass,
        loginUsingEmailPass,
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;