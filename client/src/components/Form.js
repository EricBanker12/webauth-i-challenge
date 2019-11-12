import React from 'react'
import axios from 'axios'

export function Form(props) {
    const [input, setInput] = React.useState({
        username: '',
        password: '',
    })

    React.useEffect(()=>{
        console.log(props)
    },[props])

    return (
        <section>
            <form>
                <label>
                    <h4>Username</h4>
                    <input type='text' name='username' value={input.username} />
                </label>
                <label>
                    <h4>Password</h4>
                    <input type='password' name='password' value={input.password} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}