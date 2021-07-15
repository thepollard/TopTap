import React, { useState } from "react";
import Parse from "parse";

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
        <div>
            <input
                type="text"
                value={username}
                placeholder={'Username'}
                onChange={(e) => {setUsername(e.currentTarget.value)}}
            />
            <input
                type="password"
                value={password}
                placeholder={'Password'}
                secureTextEntry
                onChange={(e) => {setPassword(e.currentTarget.value)}}
            />
            <button type="submit" onClick={doUserLogIn}>Sign in</button>
        </div>
    );
};

export default UserLogIn;