import React from 'react'
import axios from 'axios'

export function Users(props) {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:4000/api/users')
            .then(users => {
                setUsers(users)
            })
            .catch(console.error)
    }, [])

    return (
        <section>
            {users.map((user, i) => <div key={i}><h4>{user.username}</h4></div>)}
        </section>
    )
}