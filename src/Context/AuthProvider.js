import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseconfig';
import { Spin } from 'antd';

export const AuthContext = createContext()


export default function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [isLoding, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
                setIsLoading(false);
                navigate('/');
            } else {
                setIsLoading(false);
                navigate('/login');
            }
        })

        return () => {
            unsubcribed();
        }
    }, [navigate])

    return (
        <AuthContext.Provider value={user}>
            {isLoding ? <Spin style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} /> : children}
        </AuthContext.Provider>
    )
}
