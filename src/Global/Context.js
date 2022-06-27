import { setUserId } from 'firebase/analytics';
import React, { createContext } from 'react'
import { auth } from "./config"
export const ContextProvider = createContext();
const Context = (props) => {
    const [model, setModel] = React.useState(false);
    const [loader,setLoader]=React.useState(true);
    const [user,setUser]=React.useState(null);

    const openModel = () => {
        setModel(true);
    };

    const closeModel = () => {
        setModel(false);
    };


    const register = async (user) => {
        const { username, email, password } = user;


        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            res.user.updateProfile({ displayName: username });
            setModel(false);
        }
        catch (error) {

        }

    };
    const login = async user => {
        const { email, password } = user;
        const res = await auth.signInWithEmailAndPassword(email, password);
        setModel(false);
    }
    React.useEffect(()=>{
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoader(false);
        })
    },[]);
    return (
        <ContextProvider.Provider value={{ model, openModel, closeModel, register,user,loader }}>
            {props.children}
        </ContextProvider.Provider>


    )
}

export default Context