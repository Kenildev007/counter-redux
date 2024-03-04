import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/actions/usersAction';

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const handleUser = () => {
        const newUser = {name: 'kenil', email :'kenilgorithms@gmail.com'};
        dispatch(setUser(newUser));
    }
    return (
        <div>
            <h1>
                {user ? (
                    <h1>User : {user.name}</h1>
                ) : (
                    <h1>No User Found</h1>
                )}
            </h1>
            <button onClick={handleUser}>Set User</button>
        </div>
    )
}

export default User;