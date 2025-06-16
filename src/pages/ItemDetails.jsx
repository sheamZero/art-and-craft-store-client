import { useLoaderData } from "react-router-dom";

const ItemDetails = () => {
    const item = useLoaderData();
    console.log(item);

    const { image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, user_email, user_name, } = item;

    return (
        <section className="min-h-screen bg-background px-4 md:px-16 py-10">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                        src={image}
                        alt={item_name}
                        className="w-full h-80 object-cover rounded-lg shadow"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 text-paragraph">
                    <h2 className="text-3xl font-bold text-heading">{item_name}</h2>
                    <p className="text-sm text-gray-500 italic">{subcategory_Name}</p>
                    <p className="text-md">{short_description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                        <p><strong className="text-heading">Price:</strong> {price}</p>
                        <p><strong className="text-heading">Rating:</strong>  {rating} / 5</p>
                        <p><strong className="text-heading">Customization:</strong> {customization}</p>
                        <p><strong className="text-heading">Processing Time:</strong> {processing_time}</p>
                        <p><strong className="text-heading">Stock Status:</strong> {stockStatus}</p>
                        <p><strong className="text-heading">Seller:</strong> {user_name}</p>
                        <p><strong className="text-heading">Contact:</strong> {user_email}</p>
                    </div>

                    <button className="mt-6 bg-buttonBg hover:bg-buttonHoverBg text-white px-6 py-2 rounded-full shadow-buttonShadow transition">
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ItemDetails;
