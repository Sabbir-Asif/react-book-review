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
  }, [books]);

  useEffect(()=> {
    const wishListedIds = getWishListedBooks();
    if(books.length > 0) {
      const booksInWishList = [];
      for(const id of wishListedIds) {
        const book = books.find(book => book.bookId === id);
        if(book) {
          booksInWishList.push(book);
        }
      }
      setWishList(booksInWishList);
    }
  },[books]);

  const handleReadBooks = () => {
    setDisplayBooks(readList);
  };

  const handleWishlistBooks = () => {
    setDisplayBooks(wishList);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (criteria) => {
    let sortedBooks = [...displayBooks];
    
    switch (criteria) {
      case 'rating':
        sortedBooks.sort((a, b) => b.rating - a.rating);
        break;
      case 'pages':
        sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        break;
      case 'year':
        sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        break;
      default:
        break;
    }

    setDisplayBooks(sortedBooks);
  };

  return (
    <div className='p-3'>
      <h2 className="text-2xl lg:text-3xl font-work-sans font-bold my-10 p-6 bg-base-200 rounded-lg text-center">
        Books
      </h2>

      <span className="flex justify-center">
        <details
          className="dropdown"
          open={isOpen}
          onToggle={toggleDropdown}
        >
          <summary className="btn m-1 bg-green-primary text-white font-semibold text-base lg:text-lg font-work-sans">
            Sort By
            <span className="text-2xl">
              {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </summary>

          <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
            <li><a onClick={() => handleSort('rating')}>Rating</a></li>
            <li><a onClick={() => handleSort('pages')}>Number of Pages</a></li>
            <li><a onClick={() => handleSort('year')}>Publishing Year</a></li>
          </ul>
        </details>
      </span>

      <div className="flex items-end my-2">
        <div className="font-work-sans text-lg text-gray-500">
          <button className='focus:text-gray-800 p-1 lg:p-6 focus:border-2 focus:border-y-gray-300 focus:border-t-gray-300 focus:border-b-0 border-b-2 focus:rounded-t-lg' onClick={handleReadBooks}>Read Books</button>
          <button className='focus:text-gray-800 p-1 lg:p-6 focus:border-2 focus:border-y-gray-300 focus:border-t-gray-300 focus:border-b-0 border-b-2 focus:rounded-t-lg' onClick={handleWishlistBooks}>Wishlist Books</button>
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
