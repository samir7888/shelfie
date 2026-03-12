import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { ID, Query } from "react-native-appwrite";
import { useUser } from "./UserContext";
import { Permission, Role } from "react-native-appwrite";
import { client, databases } from "../lib/appwriteClient";


const DATABASE_ID = '69a91e56002e415e84ef';
const COLLECTION_ID = 'books';

const BooksContext = createContext();

export default BooksContext;

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const { user } = useUser();

    const createBook = async (data) => {
        try {
            const response = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, userId: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const fetchBooks = async () => {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID,
                [
                    Query.equal("userId", user.$id)
                ]
            );
            setBooks(response.documents);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchBookById = async (id) => {
        try {
            const response = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const addBook = async (book) => {
        try {
            const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), book);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const updateBook = async (id, book) => {
        try {
            const response = await databases.updateDocument(DATABASE_ID, COLLECTION_ID, id, book);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const deleteBook = async (id) => {
        try {
            const response = await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let unsubscribe;
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`
        if (user) {
            fetchBooks();

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;
                if (events[0].includes('create')) {
                    setBooks((prevBooks) => [...prevBooks, payload])
                }
                if (events[0].includes('delete')) {
                    setBooks((prevBooks) => prevBooks.filter(b => b.$id !== payload.$id));
                }
            })
        } else {
            setBooks([]);
        }

        return () => {
            if (unsubscribe) unsubscribe();
        }
    }, [user]);

    return (
        <BooksContext.Provider value={{ books, createBook, setBooks, fetchBooks, fetchBookById, addBook, updateBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}


export const useBooks = () => {
    const context = useContext(BooksContext);
    if (!context) {
        throw new Error('useBooks must be used within a BooksProvider');
    }
    return context;
}