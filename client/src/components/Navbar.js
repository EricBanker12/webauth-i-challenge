import React from 'react'
import {Link} from 'react-router-dom'

import {axiosWithCred} from '../utils'

export function Navbar(props) {
    function logout() {
        axiosWithCred.delete('http://localhost:4000/api/logout')
            .then(() => {
                props.history.push('/')
            })
            .catch(console.error)
    }

    return (
        <header>
            <nav>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <button onClick={logout}>Logout</button>
            </nav>
        </header>
    )
}