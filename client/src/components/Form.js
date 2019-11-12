import React from 'react'

import {axiosWithCred} from '../utils'

export function Form(props) {
    const [input, setInput] = React.useState({
        username: '',
        password: '',
    })

    function inputHandler(event) {
        setInput({...input, [event.target.name]: event.target.value})
    }

    function submitHandler(event) {
        event.preventDefault()
        
        const address = 'http://localhost:4000/api/'+(props.match.path.includes('login')?'login':'register')

        axiosWithCred.post(address, input)
            .then(resp => {
                console.log(resp)
                props.history.push('/users')
            })
            .catch(console.error)
    }

    return (
        <section>
            <h1>{props.match.path.includes('login')?'Login':'Register'}</h1>
            <form onSubmit={submitHandler}>
                <label>
                    <h4>Username</h4>
                    <input type='text' name='username' value={input.username} onChange={inputHandler} />
                </label>
                <label>
                    <h4>Password</h4>
                    <input type='password' name='password' value={input.password} onChange={inputHandler} />
                </label>
                <button type='submit'>{props.match.path.includes('login')?'Login':'Register'}</button>
                <p>By logging in or registering, you consent to the use of cookies for the purpose of authentication.</p>
            </form>
        </section>
    )
}