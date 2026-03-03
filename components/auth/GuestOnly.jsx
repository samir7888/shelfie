import { useRouter } from "expo-router";
import { useUser } from "../../contexts/UserContext"
import ThemedLoader from "../ThemedLoader";
import ThemedView from "../ThemedView";
import { useEffect } from "react";

const GuestOnly = ({ children }) => {
    const { user, authChecked } = useUser();

    const router = useRouter();

    useEffect(() => {
        if (authChecked && user) {
            router.replace('/profile');
        }
    }, [authChecked, user]);
    if (!authChecked || user) {
        return (
            <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <ThemedLoader />
            </ThemedView>
        )
    }

    return children;
}

export default GuestOnly