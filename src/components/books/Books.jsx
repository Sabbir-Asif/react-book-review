import { useEffect, useState } from "react";
import BookCard from "../bookCard/BookCard";

const Books = () => {
    const [books, setbooks] = useState([]);
    useEffect(() => {
        fetch('/data/books.json')
        .then(res => res.json())
        .then(data => setbooks(data));
    },[])
    console.log(books);
    return (
        <div className="my-20 space-y-10 md:space-y-20">
            <h2 className="text-2xl md:text-4xl font-bold font-playfair text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.map(book => <BookCard key = {book.bookId} book = {book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;