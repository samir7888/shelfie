import { createContext, useContext, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwriteClient";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            const response = await account.get();
            setUser(response);
        } catch (error) {
            setUser(null);
        } finally {
            setAuthChecked(true);
        }
    }

    async function login(email, password) {
        try {
            // Check if a session already exists and delete it
            try {
                await account.deleteSession('current');
            } catch (e) {
                // Ignore error if no session exists
            }

            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async function logout() {
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <UserContext.Provider value={{ user, setUser, login, register, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
