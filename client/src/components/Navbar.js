import React from 'react'
import {Link} from 'react-router-dom'

export function Navbar(props) {
    return (
        <header>
            <nav>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </header>
    )
}