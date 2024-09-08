const getWishListedBooks = () => {
    const wishListedBooks = localStorage.getItem('wishlist');
    if (wishListedBooks) {
        return JSON.parse(wishListedBooks);
    }
    return [];
}

const addToWishList = id => {
    const wishListedBooks = getWishListedBooks();
    const readListedBooks = getReadListedBooks();
    const exists = wishListedBooks.find(bookId => bookId === id);
    const existsInReadList = readListedBooks.find(bookId => bookId === id);
    if (existsInReadList) {
        return "This book is already in reading list"
    }
    else {
        if (!exists) {
            wishListedBooks.push(id);
            localStorage.setItem('wishlist', JSON.stringify(wishListedBooks));
            return "Book added successfully to wishlist"
        }
        else {
            return "This book has already been added to wishlist"
        }
    }
}

const getReadListedBooks = () => {
    const readListedBooks = localStorage.getItem('readlist');
    if (readListedBooks) {
        return JSON.parse(readListedBooks);
    }
    return [];
}

const addToReadList = id => {
    const readListedBooks = getReadListedBooks();
    const exists = readListedBooks.find(bookId => bookId === id);
    if (!exists) {
        readListedBooks.push(id);
        localStorage.setItem('readlist', JSON.stringify(readListedBooks));
        return "Book added successfully to reading list"
    }
    return "This book has already been added to reading list"
}