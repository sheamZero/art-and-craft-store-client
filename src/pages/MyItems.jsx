import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const MyItems = () => {
    const { user } = useContext(AuthContext);
    const items = useLoaderData();
    const [customizationFilter, setCustomizationFilter] = useState("All");

    // Filter only current user's items
    const myItems = items.filter(item => item.user_email === user?.email);

    // State for filtered items
    const [filteredItems, setFilteredItems] = useState(myItems);

    // Update filtered items whenever filter changes
    useEffect(() => {
        if (customizationFilter === "All") {
            setFilteredItems(myItems);
        } else {
            const filtered = myItems.filter(
                item => item.customization.toLowerCase() === customizationFilter.toLowerCase()
            );
            setFilteredItems(filtered);
        }
    }, [customizationFilter]);

    // Handle dropdown change
    const handleOnChange = (e) => {
        setCustomizationFilter(e.target.value);
    };

    // Handle Update
    const handleUpdate = (id) => {
        console.log("Update clicked for item:", id);
        // Example: navigate(`/update/${id}`);
    };

    // Handle Delete
    const handleDelete = (id) => {
        console.log("Delete clicked for item:", id);
        // Example: show confirmation and call delete API
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">My Art & Craft List</h2>

            {/* Filter Dropdown */}
            <div className="mb-6 text-center">
                <label className="mr-2 font-semibold">Filter by Customization:</label>
                <select
                    className="border rounded px-3 py-2"
                    value={customizationFilter}
                    onChange={handleOnChange}
                >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            {/* Items Grid */}
            {filteredItems.length === 0 ? (
                <p className="text-center text-gray-500">No items found for the selected filter.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredItems.map(item => (
                        <div key={item._id} className="bg-white shadow-lg border rounded-xl overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.item_name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <h3 className="text-xl font-semibold">{item.item_name}</h3>
                                <p><strong>Price:</strong> ${item.price}</p>
                                <p><strong>Rating:</strong> {item.rating}</p>
                                <p><strong>Customization:</strong> {item.customization}</p>
                                <p><strong>Stock Status:</strong> {item.stockStatus}</p>
                                <div className="flex justify-between mt-4">
                                    {/* <button
                                        onClick={() => handleUpdate(item._id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button> */}
                                    <Link
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        to={`/my-items/${item._id}`}>Update
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyItems;
