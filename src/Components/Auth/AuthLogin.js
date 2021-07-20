import React, { useState } from "react";
import Parse from "parse";
import './auth-login.css';

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
        <div className="auth-login">
            <div className="login">
                <h1 className="login-info">Log into your TopTap account to get started</h1>
                <label htmlFor={username} className="un-login">Username: </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => {setUsername(e.currentTarget.value)}}
                    className="un-login-box"
                />
                <label htmlFor={password} className="pw-login">Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.currentTarget.value)}}
                    className="pw-login-box"
                />
                <button type="submit" onClick={doUserLogIn} className="submit-login">Sign in</button>
            </div>
        </div>
    );
};

export default UserLogIn;