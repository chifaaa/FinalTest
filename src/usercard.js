import React from 'react';
import {Link,} from 'react-router-dom'

const UserCard = (props) => {
    const {user = {}} = props

    return (
        <div className="user-card">
            
            <div className="user-image" />
            
            <Link to={`/posts/${user.id}`}><div className="user-name">{user.name} </div></Link>
        </div>
    )
}

export default UserCard