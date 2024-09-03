import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { bookId, bookName, category, tags, author, rating, image } = book;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 shadow-sm p-6 border-gray-200 border-2" >
                <figure className="">
                    <img
                        src={image}
                        alt="Book"
                        className="h-56 rounded-lg" />
                </figure>
                <div className="card-body">
                    <p className="text-green-primary font-work-sans space-x-2 flex items-center md:space-x-8 mt-6">
                        {
                            tags.map(tag => <span className="p-3 bg-base-200 rounded-full">{tag}</span>)
                        }
                    </p>
                    <h2 className="card-title mt-4 font-playfair text-2xl font-bold">{bookName}</h2>
                    <p className="font-work-sans font-medium text-gray-500">By : {author}</p>
                    <hr className="my-5 border-dashed text-gray-600" />
                    <div className="font-work-sans text-gray-500 font-medium flex justify-between">
                        <p>{category}</p>
                        <span className="flex gap-2 font-medium">
                            <p>{rating}</p>
                            <FaRegStar className="text-xl" />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;