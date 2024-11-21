
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [showProfile, setShowProfile] = useState(false);

    const registerUser = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const toggleProfile = () => {
        setShowProfile(prev => !prev);
    };

    return (
        <UserContext.Provider value={{
            user,
            showProfile,
            registerUser,
            logout,
            toggleProfile
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}