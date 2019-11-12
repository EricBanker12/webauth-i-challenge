import React from 'react'

import {axiosWithCred} from '../utils'

export function Users(props) {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        axiosWithCred.get('http://localhost:4000/api/users')
            .then(resp => {
                setUsers(resp.data)
            })
            .catch(console.error)
    }, [])

    return (
        <section>
            {users.map((user, i) => <div key={i}><h4>{user.username}</h4></div>)}
        </section>
    )
}