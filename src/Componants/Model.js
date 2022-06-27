import React from 'react'
import { auth } from '../Global/config';
import { ContextProvider } from '../Global/Context'


const Model = () => {

    const { model,closeModel,register,login} = React.useContext(ContextProvider);
    const [state, setState] = React.useState({
        register: true,
        login: false
    });
    const [inputs,setInput]=React.useState({
        register:true,
        login:false
    });
    const handleInput = (e) => {
        setInput({...inputs,[e.target.name]: e.target.value})
    };

    const userLogin = e =>{
        e.preventDefault();
        login(inputs); 
    }
   

    const formsToggle = () => {
        setState({
            ...setState,
            register: !state.register,
            login: !state.login
        })
    }
    const closeForm=(e) => {
        const className = e.target.getAttribute('class')
        if(className==="model")
        {
            closeModel();
        }
    }
    const registerUser = (e) =>  {
        e.preventDefault();
        register(inputs);
        setInput({username:"",email:"",password:""});
    }
    return (
        <>{model ? <div className='model' onClick={closeForm}>

            <div className='model_container'>
                {state.register ?
                    <div className='model_form'>
                        <form onSubmit={registerUser}>
                            <div className="model_group">
                                <img src='images/logo.png'></img>
                            </div>
                            <div className='model_group'>
                                <input type="text"
                                 name="username" 
                                 className='model_input' 
                                 placeholder='Username...'
                                 onChange={handleInput}
                                 value={inputs.username}>

                                 </input>
                            </div>
                            <div className='model_group'>
                                <input type="email" 
                                name="email" 
                                className='model_input' 
                                placeholder='Email.'
                                onChange={handleInput}
                                 value={inputs.email}
                                 required>
                                 </input>
                            </div>
                            <div className='model_group'>
                                <input type="password" 
                                name="password" 
                                className='model_input'
                                 placeholder='Password'
                                 onChange={handleInput}
                                 value={inputs.password}
                                 required></input>
                            </div>
                            <div className='model_group'>
                                <input type="submit"
                                 value="Register"
                                  className='btn btn-smart'
                                  required></input>
                            </div>
                            <div className='model_group-span'>
                                <span onClick={formsToggle}>Already have an account  ?</span>
                            </div>
                        </form>
                    </div> :
                    <div className='model_form'>
                        <form onSubmit={userLogin}>
                            <div className="model_group">
                                <img src='images/logo.png'></img>
                            </div>
                            
                            <div className='model_group'>
                                <input type="email" 
                                name="email" 
                                className='model_input' 
                                placeholder='Email'
                                onChange={handleInput}
                                 value={inputs.email}
                                 required></input>
                            </div>
                            <div className='model_group'>
                                <input type="password"
                                 name="password" 
                                 className='model_input' 
                                 placeholder='Password'
                                 onChange={handleInput}
                                 value={inputs.password}
                                 required></input>
                            </div>
                            <div className='model_group'>
                                <input type="submit" value="Login" className='btn btn-smart'></input>
                            </div>
                            <div className='model_group-span'>
                                <span onClick={formsToggle}>Create a new acsount ?</span>
                            </div>
                        </form>
                    </div>}

            </div>
        </div> : ""}</>


    )
}

export default Model