import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='text-center'>
            <h1>Hey! {user.displayName}</h1>
            <h3>Your profile is under construction</h3>
        </div>
    );
};

export default Profile;