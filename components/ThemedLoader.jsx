import { Colors } from "../constants/Colors";
import ThemedView from "./ThemedView"
import { useColorScheme, ActivityIndicator } from "react-native"

const ThemedLoader = () => {
    const color = useColorScheme();
    const theme = Colors[color] ?? Colors.light;
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={theme.text} />
        </ThemedView>
    )
}

export default ThemedLoader