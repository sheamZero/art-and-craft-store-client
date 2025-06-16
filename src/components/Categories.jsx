import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";


const Categories = ({ items }) => {
    // console.log(items);

    return (
        <div className="flex flex-col items-center gap-6 py-16">
            <h1 className="text-3xl text-teal-600 font-bold">Explore Our Art & Craft Categories</h1>
            <p className="sm:w-1/2 text-center text-gray-700 text-lg">
                Discover a diverse collection of handmade creations, carefully crafted across various styles and
                masterpieces—intricate sculptures, or unique decor, in every category.
            </p>

            {/* category card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
                    {items.map((item, idx) => (
                        <Link key={idx} className="flex flex-col items-center hover:text-teal-600">
                            <div
                                className="flex items-center justify-center rounded-full bg-white shadow-md w-60 h-60 overflow-hidden hover:translate-y-[10px] transition-all duration-500"
                            >
                                <img
                                    src={item.image}
                                    alt={item.subcategory_Name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <p className="mt-3 font-medium text-center text-lg ">{item.subcategory_Name}</p>
                        </Link>

                    ))}
            </div>
        </div>
    );
};

export default Categories;
