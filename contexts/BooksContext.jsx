import { createContext } from "react";

const BooksContext = createContext();

export default BooksContext;

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await databases.listDocuments('699d6661003a0be505d9', '699d6661003a0be505d9');
            setBooks(response.documents);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchBookById = async (id) => {
        try {
            const response = await databases.getDocument('699d6661003a0be505d9', '699d6661003a0be505d9', id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const addBook = async (book) => {
        try {
            const response = await databases.createDocument('699d6661003a0be505d9', '699d6661003a0be505d9', ID.unique(), book);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const updateBook = async (id, book) => {
        try {
            const response = await databases.updateDocument('699d6661003a0be505d9', '699d6661003a0be505d9', id, book);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const deleteBook = async (id) => {
        try {
            const response = await databases.deleteDocument('699d6661003a0be505d9', '699d6661003a0be505d9', id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <BooksContext.Provider value={{ books, setBooks, fetchBooks, fetchBookById, addBook, updateBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}
