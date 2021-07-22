import React, { useEffect, useState } from "react";
import Parse from "parse";

//Uses Parse to check for currently logged in user.  Returns the username.
export const WhoAmI = () => {
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      async function getCurrentUser() {
        if (username === '') {
          const currentUser = await Parse.User.currentAsync();
          if (currentUser !== null) {
            setUsername(currentUser.getUsername());
          }
        }
      }
      getCurrentUser();
    }, [username]);

    return (
        <div>
            {username}
        </div>
    );
};