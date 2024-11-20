import { IoLocationOutline } from "react-icons/io5";
import { BsPeople, BsFileEarmarkBarGraph } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListedBookCard = ({ book }) => {
  const { bookId, bookName, category, tags, author, rating, image, yearOfPublishing, publisher, totalPages } = book;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-6 border border-gray-300 rounded-lg my-6 space-y-4 space-x-2 lg:space-x-6 lg:space-y-0 items-center">
      <div className="flex justify-center sm:block p-6">
        <img src={image} alt="" className="rounded-lg max-w-full h-auto" />
      </div>

      <div className="col-span-3 space-y-4">
        <h2 className="font-playfair text-xl lg:text-2xl font-bold text-center sm:text-left">{bookName}</h2>
        <h4 className="font-work-sans font-medium text-gray-500 text-center sm:text-left">By: {author}</h4>

        <div className="flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start">
          <p className="font-bold font-work-sans">Tag:</p>
          <span className="flex gap-2 lg:gap-4 font-work-sans text-green-primary">
            {tags.map((tag, index) => (
              <span key={index}>#{tag}</span>
            ))}
          </span>
          <span className="flex items-center text-gray-500 font-work-sans gap-1">
            <IoLocationOutline />
            <p className="">Year: {yearOfPublishing}</p>
          </span>
        </div>

        <div className="flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start text-gray-500 font-work-sans">
          <div className="flex items-center gap-1">
            <BsPeople />
            <h4>Publisher: {publisher}</h4>
          </div>
          <div className="flex items-center gap-1">
            <BsFileEarmarkBarGraph className="text-sm" />
            <h4>Pages: {totalPages}</h4>
          </div>
        </div>

        <hr className="text-gray-500" />

        <div className="flex flex-wrap gap-2 lg:gap-4 justify-center sm:justify-start font-work-sans">
          <button className="bg-blue-200 text-blue-500 px-4 py-2 rounded-full text-sm lg:text-base">Category: {category}</button>
          <button className="bg-amber-100 text-amber-500 px-4 py-2 rounded-full text-sm lg:text-base">Rating: {rating}</button>
          <Link to={`/book/${bookId}`} className="bg-green-primary text-white px-4 py-2 rounded-full text-sm sm:text-base">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
