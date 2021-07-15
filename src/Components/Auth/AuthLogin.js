import React, { useState } from "react";
import Parse from "parse";

const UserLogIn = ({ user, onChange, onSubmit }) => {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const doUserLogIn = async function (){
        const usernameValue = username;
        const passwordValue = password;
        return await Parse.user.login(usernameValue, passwordValue)
            .then(async (loggedInUser) => {
                alert(
                    `User ${loggedInUser.get('username')} has successfully signed in!`
                );
                const currentUser = await Parse.User.currentAsync();
                console.log(loggedInUser === currentUser);
                return true;
            });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={username}
                    placeholder={'Username'}
                    onChange={onChange}
                />
                <input
                    type="password"
                    value={password}
                    placeholder={'Password'}
                    secureTextEntry
                    onChange={onChange}
                />
                <button type="submit" onSubmit={onSubmit}>Sign in</button>
            </form>
        </div>
    );
};

export default UserLogIn;