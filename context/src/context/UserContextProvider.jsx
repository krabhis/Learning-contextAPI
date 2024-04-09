import { useState } from "react";
import React  from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}  
        {/* here children is components in which u want to use that props or properties like user and setuser */}
        </UserContext.Provider>
    )
}

export default UserContextProvider