import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ id, children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{id, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
