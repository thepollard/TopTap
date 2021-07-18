import React, { useState } from "react";
import Parse from "parse";
import './auth.css';

const UserLogIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const doUserLogIn = async function() {
        const usernameValue = username;
        const passwordValue = password;

        return await Parse.User.logIn(usernameValue, passwordValue)
            .then(async (loggedInUser) => {
                alert(
                    `User ${loggedInUser.get('username')} has successfully signed in!`
                );
                const currentUser = await Parse.User.currentAsync();
                console.log(loggedInUser === currentUser);
                localStorage.setItem("auth", true);
                window.location.href='/'        
                return true;
            })
            .catch((error) => {
                alert('Error!', error.message);
                return false;
            });
    };

    return (
        <div className="auth">
            <div className="login">
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
                    secureTextEntry
                    onChange={(e) => {setPassword(e.currentTarget.value)}}
                    className="pw-login-box"
                />
                <button type="submit" onClick={doUserLogIn} className="submit-login">Sign in</button>
            </div>
        </div>
    );
};

export default UserLogIn;