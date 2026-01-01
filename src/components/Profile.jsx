import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {

    const {user}=use(AuthContext);
    console.log(user);

    return (
        <div className='m-10 w-6/12 mx-auto bg-[#f8f8f8] rounded-xl p-4 flex gap-4 justify-center shadow-2xl'>
            {user && <img className='rounded-full' src={user.photoURL} alt="" />}
            <div className='flex flex-col justify-center space-y-3'>
                <h1 className='font-semibold text-[16px]'>Name: {user.displayName}</h1>
                <h2 className='font-semibold text-[16px]'>Email: {user.email}</h2>
                <button className='btn bg-black text-white w-2/3 rounded-sm'>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;