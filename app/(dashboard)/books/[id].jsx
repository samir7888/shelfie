import { StyleSheet } from "react-native";
import ThemedText from "../../../components/ThemedText"
import ThemedView from "../../../components/ThemedView"
import { useLocalSearchParams } from "expo-router";

const BookDetails = () => {
   const {id} = useLocalSearchParams();
    return (
        <ThemedView safe={true} style={Styles.container}>
            <ThemedText>Books Details: {id}</ThemedText>
        </ThemedView>
    )
}

export default BookDetails;


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    }
})