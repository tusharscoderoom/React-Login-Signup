import { createContext, useState } from "react";

const AuthUser_Context = createContext();

const AuthUserContextProvider = (props) => {
  const [isValidUser, setIsValidUser] = useState(false);

  return (
    <AuthUser_Context.Provider value={{ isValidUser, setIsValidUser }}>
      {props.children}
    </AuthUser_Context.Provider>
  )
}

export { AuthUser_Context, AuthUserContextProvider };
