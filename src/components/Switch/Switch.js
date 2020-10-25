import React from 'react'
import './Switch.css'

export default function Switch({
    users,
    onUserClick
}) {
    return (
        <div>
            {users.map(user => (
                <button key={user.id} onClick={() => onUserClick(user)}>{user.firstName}</button>
            ))}
        </div>
    )
}
