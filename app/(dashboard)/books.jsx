import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { useBooks } from "../../contexts/BooksContext"
import { useEffect } from 'react'

const Books = () => {
  const { books, fetchBooks } = useBooks();
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
      <Spacer />
      {books.map((book) => (
        <ThemedText key={book.$id}>{book.title}</ThemedText>
      ))}
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",

  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})