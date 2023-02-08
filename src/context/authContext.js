import { createContext, useContext, useEffect,useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}){
    

    const [user, setUser] = useState(null)

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = async (email, password) =>  signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider  )
    }

    useEffect(()=>{
       onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        console.log(currentUser)
       })
    }, [])
       

    return(
        <authContext.Provider value={{user, signup, login, logout, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    )
}