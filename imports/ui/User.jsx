import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
const User = () => {
    const onLogout = () => {
        Meteor.logout();
    }
    return (
        <div>

            <div>Hello,<b>{Meteor.user().username}</b> </div>

            <Link to="/" onClick={onLogout}>Logout</Link>
        </div>
    )
}

export default User;
