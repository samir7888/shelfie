import { StyleSheet, Text } from "react-native";
import ThemedText from "../../../components/ThemedText"
import ThemedView from "../../../components/ThemedView"
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useBooks } from "../../../contexts/BooksContext";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedCard from "../../../components/ThemedCard";
import ThemedButton from "../../../components/ThemedButton"
import { Colors } from "../../../constants/Colors";

const BookDetails = () => {
   const {id} = useLocalSearchParams();
   const {fetchBookById, deleteBook} = useBooks();
   const [book , setBook] = useState(null);
   const router = useRouter();
   useEffect(() => {
    const fetchBook = async () => {
        const response = await fetchBookById(id);
        setBook(response);
    }
    fetchBook();
   }, [id]);

   const handleDelete = async() => {
    await deleteBook(id);
    setBook(null)
    router.push('/books')
   }

   if(!book) {
    return (
        <ThemedView safe={true} style={Styles.container}>
            <ThemedLoader />
        </ThemedView>
    )
   }
    return (
        <ThemedView safe={true} style={Styles.container}>
            <ThemedCard style={Styles.card}>
                <ThemedText type="title" style={Styles.title}>{book?.title}</ThemedText>
                <ThemedText type="subtitle" style={Styles.author}>{book?.author}</ThemedText>
                <ThemedText type="subtitle" style={Styles.genre}>{book?.genre}</ThemedText>
                <ThemedText type="subtitle" style={Styles.year}>{book?.year}</ThemedText>
                <ThemedText type="subtitle" style={Styles.description}>{book?.description}</ThemedText>
            </ThemedCard>
            <ThemedButton onPress={handleDelete}>
                <Text style={{ color: '#fff', textAlign:'center'}}>Delete</Text>
            </ThemedButton>
        </ThemedView>
    )
}

export default BookDetails;


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    author:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    genre:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    year:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: Colors.warning,
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    }

})