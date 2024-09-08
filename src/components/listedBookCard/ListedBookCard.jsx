import { IoLocationOutline } from "react-icons/io5";
import { BsPeople, BsFileEarmarkBarGraph } from "react-icons/bs";
import { Link } from "react-router-dom";
const ListedBookCard = ({ book }) => {
    const { bookId, bookName, category, tags, author, rating, image, yearOfPublishing, publisher, totalPages } = book;
    return (
        <div className="grid grid-cols-4 p-6 border border-gray-300 rounded-lg my-6 space-x-6 items-center">
            <div className="p-6">
                <img src={image} alt="" className="rounded-lg" />
            </div>
            <div className="col-span-3 space-y-4">
                <h2 className="font-playfair text-2xl font-bold">{bookName}</h2>
                <h4 className="font-work-sans font-medium text-gray-500">By: {author}</h4>
                <div className="flex gap-4">
                    <p className="font-bold font-work-sans">Tag:</p>
                    <span className="flex gap-4 font-work-sans text-green-primary">
                        {
                            tags.map(tag => <span>#{tag}</span>)
                        }
                    </span>
                    <span className="flex items-center text-gray-500 font-work-sans gap-1">
                        <IoLocationOutline />
                        <p className="">Year of Publishing: {yearOfPublishing}</p>
                    </span>
                </div>
                <div className="flex items-center text-gray-500 font-work-sans gap-6">
                    <div className="flex items-center gap-1">
                        <BsPeople />
                        <h4>Publisher: {publisher}</h4>
                    </div>
                    <div className="flex items-center gap-1">
                        <BsFileEarmarkBarGraph className="text-sm" />
                        <h4>Page {totalPages}</h4>
                    </div>
                </div>
                <hr className="text-gray-500"/>
                <div className="flex items-center gap-4 font-work-sans">
                <button className="bg-blue-200 text-blue-500 p-4 rounded-full">Category: {category}</button>
                <button className="bg-amber-100 text-amber-500 p-4 rounded-full">Rating: {rating}</button>
                <Link to={`/book/${bookId}`} className="bg-green-primary p-4 text-white rounded-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;