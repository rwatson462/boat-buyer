import { useEffect } from "react";
import useRepository from "../../Hooks/useRepository";
import AuthRepository from "../Repository/AuthRepository";
import AuthContext from "./Context/AuthContext";

export default function AuthProvider({ children }) {
  const authRepository = useRepository(AuthRepository)

  const authContext = {

  }

  useEffect(() => {
    // This will run once, when the page opens
    console.log('Fetching API token')
    authRepository
      .getToken()
      .then(() => console.log('CSRF token retrieved'))
      
    // eslint-disable-next-line
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  )
}
