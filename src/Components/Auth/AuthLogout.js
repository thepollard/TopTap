import React from 'react';
import Parse from 'parse';

const UserLogOut = () => {
    const doUserLogOut = async function () {
        return await Parse.User.logOut()
            .then(async () => {
                const currentUser = await Parse.User.currentAsync();
                if (currentUser === null) {
                    alert("You have successfully logged out of TopTap");
                    localStorage.removeItem("auth");
                }
                return true;
            })
            .catch((error) => {
                alert("Error logging out", error.message);
                return false;
            });
    };

    return (
        <a id="Logout" href="#" onClick={() => doUserLogOut()}>Logout</a>
    );
};

export default UserLogOut;