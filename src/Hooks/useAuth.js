import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

//hook for context API
const useAuth = () => {
    return useContext( AuthContext );
}

export default useAuth;