import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useLoaderData } from 'react-router-dom';
import { getReadListedBooks, getWishListedBooks } from '../../utility/localStorage';
import ListedBookCard from '../listedBookCard/ListedBookCard';

const ListedBooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const books = useLoaderData();
  const [wishList, setWishList] = useState([]);
  const [readList, setReadList] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const readlistedIds = getReadListedBooks();
    if (books.length > 0) {
      const booksInReadList = [];
      for (const id of readlistedIds) {
        const book = books.find(book => book.bookId === id)
        if (book) {
          booksInReadList.push(book);
        }
      }
      setReadList(booksInReadList);
      setDisplayBooks(booksInReadList);
    }
  }, [books])
  // console.log(readList);

  useEffect(()=> {
    const wishListedIds = getWishListedBooks();
    if(books.length > 0) {
      const booksInWishList = [];
      for(const id of wishListedIds) {
        const book = books.find(book => book.bookId === id)
        if(book) {
          booksInWishList.push(book);
        }
      }
      setWishList(booksInWishList);
    }
  },[books])
  const handleReadBooks = () => {
    setDisplayBooks(readList);
  }

  const handleWishlistBooks = () => {
    setDisplayBooks(wishList);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 className="text-3xl font-work-sans font-bold my-10 p-6 bg-base-200 rounded-lg text-center">
        Books
      </h2>

      <span className="flex justify-center">
        <details
          className="dropdown"
          open={isOpen}
          onToggle={toggleDropdown}
        >
          <summary className="btn m-1 bg-green-primary text-white font-semibold text-lg font-work-sans">
            Sort By
            <span className="text-2xl">
              {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </summary>

          <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Rating</a></li>
            <li><a>Number of Pages</a></li>
            <li><a>Publishing Year</a></li>
          </ul>
        </details>
      </span>
      <div className="flex items-end">
        <div className="font-work-sans text-lg text-gray-500">
          <button className='focus:text-gray-800 p-6 focus:border-2 focus:border-y-gray-300 focus:border-t-gray-300 focus:border-b-0 border-b-2 focus:rounded-t-lg' onClick={handleReadBooks}>Read Books</button>
          <button className='focus:text-gray-800 p-6 focus:border-2 focus:border-y-gray-300 focus:border-t-gray-300 focus:border-b-0 border-b-2 focus:rounded-t-lg' onClick={handleWishlistBooks}>Wishlist Books</button>
        </div>
        <div className="h-0.5 bg-gray-300 flex-grow"></div>
      </div>
      <div className="my-10">
        {
          displayBooks.map(book => <ListedBookCard key={book.bookId} book={book}></ListedBookCard>)
        }
      </div>
    </div>
    
  );
};

export default ListedBooks;
