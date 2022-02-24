import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Firebase/Firebase';

const GoogleProvider = new GoogleAuthProvider();

const AuthContext = createContext()

export const useAuth = ()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrent] = useState({});
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = getAuth();
        const  unsubscribe = onAuthStateChanged(auth,user=>{
            setCurrent(user)
        })
        return unsubscribe;
    },[])

    
    const signInWithGooogle = () =>{
       return signInWithPopup(auth,GoogleProvider)
        .then((result=>{
            // console.log(result.user)
            const {displayName, email} = result.user;
            const loggedInuser = {
                name: displayName,
                email: email
            }
            setCurrent(loggedInuser)
        }))
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            // console.log('signOut successfull');
            setCurrent('');
            navigate('/')
        })
    }
    const value = {
        signInWithGooogle,
        currentUser,
        logOut
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;