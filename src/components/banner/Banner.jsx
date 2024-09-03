import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="my-20 p-2 md:p-0 flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="space-y-8 md:space-y-14">
                <h2 className="text-4xl md:text-6xl font-playfair font-bold">Books to freshen up your bookshelf</h2>
                {/* <button className="btn text-white text-lg font-semibold bg-green-primary">View The List</button> */}
                <Link to="/listed-books" className="btn text-white text-sm md:text-lg font-semibold bg-green-primary">View The List</Link>
            </div>
            <div className="">
                <img src="https://ew.com/thmb/o1XjzUepjVV23y1qZ7GFYj6l8Bs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-folio-society-2000-11d4eb62b69346cbafc8958629954718.jpg" alt="banner image" />
            </div>
        </div>
    );
};

export default Banner;