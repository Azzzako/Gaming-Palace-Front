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

<<<<<<< HEAD
    const login = async (email, password, displayName) =>  signInWithEmailAndPassword(auth, email, password, displayName)
=======
    const login = async (email, password) =>  signInWithEmailAndPassword(auth, email, password)
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider  )
    }

    useEffect(()=>{
       onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
<<<<<<< HEAD

=======
        console.log(currentUser)
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
       })
    }, [])
       

    return(
        <authContext.Provider value={{user, signup, login, logout, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
