import { useEffect, useState } from "react";

export const useAuth = () => { 

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
   
    useEffect(() => { 
        const user = localStorage.getItem("user");
        if (user) { 
            setUser(JSON.parse(user));
        }
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) { 
            setAccessToken(JSON.parse(accessToken));
        }
        setLoading(false);
    },[]);

    return [
        loading,
        user,
        accessToken
    ]
}