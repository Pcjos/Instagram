import React from 'react'
import {FaRegCompass, FaRegHeart, FaSistrix, FaTelegramPlane} from 'react-icons/fa';
import {MdHome} from 'react-icons/md'
import {BsPlusSquare} from 'react-icons/bs'
import { ContextProvider } from '../Global/Context';


const Navbar = () => {

    const {model,openModel,user,loader}=React.useContext(ContextProvider);
    console.log('my model',model);

    const openForms = () =>{
        openModel();
    }
    const checkUser =()=>{
        return !loader ? (
            !loader && user  ? (
            <li>{user.displayName}</li>) :  (<li onClick={openForms}>Register/Login</li>)
        ):("...");
    


    }
    return (
        <div className='navbar'>
            <div className='navbar_first'>
                <div className='navbar_first_logo'>
                    <img src='/images/logo.png'></img>
                </div>
            </div>


            <div className='navbar_middle'>

                <div className='navbar_middle-search'>
                    <input className='navbar_search' placeholder='Search'></input>
                    <FaSistrix className='searchIcon'></FaSistrix>

                </div>
            </div>



            <div className='navbar_last'>
                <li><MdHome className="navbar_icons"/></li>
                <li><FaTelegramPlane className="navbar_icons"/></li>
                <li><FaRegCompass className="navbar_icons"/></li>
                <li><FaRegHeart className="navbar_icons"/></li>
                <li><BsPlusSquare className="navbar_icons"/></li>
                {checkUser()}
            </div>
        </div>

    )
}

export default Navbar