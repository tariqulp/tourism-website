import { useContext } from "react"
import { AuthContext } from "../component/context/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;