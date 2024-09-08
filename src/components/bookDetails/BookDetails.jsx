import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToReadList, addToWishList } from "../../utility/localStorage";

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const book = books.filter(book => book.bookId === bookId)
    const { bookName, category, tags, author, rating, image, review, totalPages, yearOfPublishing, publisher } = book[0];

    const handleRead = () => {
        toast(addToReadList(bookId));
    }

    const handleWishList = () => {
        toast(addToWishList(bookId));
    }

    return (
        <div className="my-20 flex flex-col md:flex-row gap-6 justify-center">
            <figure className="max-w-lg md:p-20 bg-base-200 rounded-lg">
                <img
                    src={image}
                    alt="Book"
                    className="rounded-lg" />
            </figure>
            <div className="py-4">
                <h2 className="text-4xl font-bold font-playfair">{bookName}</h2>
                <p className="mt-4 text-xl text-gray-600 font-medium font-work-sans">By : {author}</p>
                <hr className="text-gray-500 my-4" />
                <p className="font-work-sans text-xl font-medium text-gray-600">{category}</p>
                <hr className="text-gray-500 my-4" />
                <p className="font-work-sans text-gray-500"><span className="font-semibold text-black">Review: </span>{review}</p>
                <div className="flex gap-2 items-center md:gap-8 mt-6 font-work-sans">
                    <h2 className="font-semibold text-black">Tag</h2>
                    <p className="text-green-primary font-work-sans gap-2 flex items-center md:gap-6">
                        {
                            tags.map(tag => <span className="p-3 bg-gray-100 rounded-full">#{tag}</span>)
                        }
                    </p>
                </div>
                <hr className="text-gray-500 mt-5 md:mt-8" />
                <div className="mt-5">
                    <table className="table table-row font-work-sans">
                        <tr>
                            <td className="text-gray-500">Number of Pages:</td>
                            <td className="text-black font-semibold">{totalPages}</td>
                        </tr>
                        <tr>
                            <td className="text-gray-500">Publisher:</td>
                            <td className="text-black font-semibold">{publisher}</td>
                        </tr>
                        <tr>
                            <td className="text-gray-500">Year of Publishing:</td>
                            <td className="text-black font-semibold">{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="text-gray-500">Rating:</td>
                            <td className="text-black font-semibold">{rating}</td>
                        </tr>
                    </table>
                    <div className="flex gap-1 md:gap-3 mt-4 px-4">
                        <a className="btn btn-outline border-gray-300 hover:bg-green-primary hover:text-white hover:border-none text-sm md:text-lg font-semibold " onClick={handleRead}>Read</a>
                        <a className="btn text-white text-sm md:text-lg font-semibold bg-blue-primary hover:btn-outline" onClick={handleWishList}>Wishlist</a>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;