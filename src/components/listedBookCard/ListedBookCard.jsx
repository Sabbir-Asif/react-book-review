
const ListedBookCard = ({book}) => {
    const { bookId, bookName, category, tags, author, rating, image, yearOfPublishing, publisher } = book;
    return (
        <div className="grid grid-cols-4 p-6 border border-gray-300 rounded-lg my-6 space-x-6">
           <div className="p-6">
            <img src={image} alt="" className="rounded-lg" />
           </div>
           <div className="col-span-3">
            <h2 className="font-playfair text-2xl font-bold">{bookName}</h2>
            <h4 className="font-work-sans font-medium text-gray-500">By: {author}</h4>
            <div className="flex gap-4">
                <p className="font-bold font-work-sans">Tag:</p>
                <span className="flex gap-4 font-work-sans text-green-primary">
                    {
                        tags.map(tag => <span>#{tag}</span>)
                    }
                </span>
                <p className="font-work-sans text-gray-500">Year of Publishing: {yearOfPublishing}</p>
            </div>
           </div>
        </div>
    );
};

export default ListedBookCard;