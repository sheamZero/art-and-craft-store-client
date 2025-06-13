import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";



const ItemsCards = ({ item }) => {
    // console.log(item);

    // const {
    //     id,
    //     image,
    //     item_name,
    //     subcategory_Name,
    //     short_description,
    //     stockStatus
    // } = item;

    return (
        <div className="p-6 bg-white rounded-xl max-w-96 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            {/* Image */}
            <div className="h-56 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.item_name}
                    className="w-full rounded-t-lg h-full object-cover hover:scale-105 hover:rounded-t-lg transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold text-gray-800 my-2">{item.item_name}</h3>
                <p className="text-sm text-gray-600 flex-1">{item.short_description}</p>

                {/* Button + Price + Rating */}
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-buttonBg flex items-center gap-1 justify-center font-medium">
                        <span><BsCurrencyDollar></BsCurrencyDollar></span>
                        <span>{item.price}</span>
                    </div>

                    <div className="text-sm flex items-center gap-1 justify-center text-buttonBg font-medium">
                        <span><IoStar></IoStar></span>
                        <span>{item.rating}</span>
                    </div>
                </div>

                <Link
                    to={`/all-items/${item.id}`}  // You can replace with your route
                    className="mt-4 inline-block text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ItemsCards;




