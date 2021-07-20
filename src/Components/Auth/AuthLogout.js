import {WhoAmI} from '../CurrentUser/CurrentUser';
import React from 'react';
import { Link } from "react-router-dom";
import Parse from 'parse';

const UserLogOut = () => {
    const doUserLogOut = async function () {
        return await Parse.User.logOut()
            .then(async () => {
                const currentUser = await Parse.User.currentAsync();
                if (currentUser === null) {
                    alert("You have successfully logged out of TopTap");
                    localStorage.removeItem("auth");
                    window.location.href='/';
                }
                return true;
            })
            .catch((error) => {
                alert("Error logging out", error.message);
                return false;
            });
    };

    return (
        <div>
            <Link to="/" onClick={() => doUserLogOut()}>Logout</Link>
        </div>
    );
};

export default UserLogOut;