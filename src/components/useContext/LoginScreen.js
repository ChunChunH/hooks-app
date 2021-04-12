import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function LoginScreen() {

    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => setUser({
                    id:1234,
                    name:"Agustina Heredia",
                    email:"agussolheredia@gmail.com",
                })}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
