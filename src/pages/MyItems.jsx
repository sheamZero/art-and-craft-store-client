import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const MyItems = () => {
    const { user } = useContext(AuthContext);
    const items = useLoaderData();
    const [customizationFilter, setCustomizationFilter] = useState("All");

    // Filter only current user's items
    const myItems = items.filter(item => item.user_email === user?.email);

    const [filteredItems, setFilteredItems] = useState(myItems);

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

    const handleDelete = (id) => {
        Swal.fire({
            title: "Do you want to Remove this Item?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/items/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Success",
                                text: "Successfully deleted item!",
                                icon: "success",
                            });
                            const remaining = filteredItems.filter(item => item._id !== id);
                            setFilteredItems(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">My Art & Craft List</h2>

            {/* Filter Dropdown */}
            <div className="mb-6 text-center">
                <label className="mr-2 font-medium text-gray-700">Filter by Customization:</label>
                <select
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={customizationFilter}
                    onChange={(e) => setCustomizationFilter(e.target.value)}
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
                        <div key={item._id} className="bg-gray-50 shadow-md border rounded-xl overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.item_name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 space-y-2 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-800">{item.item_name}</h3>
                                <p><span className="font-medium">Price:</span> ${item.price}</p>
                                <p><span className="font-medium">Rating:</span> {item.rating}</p>
                                <p><span className="font-medium">Customization:</span> {item.customization}</p>
                                <p><span className="font-medium">Stock Status:</span> {item.stockStatus}</p>
                                <div className="flex justify-between mt-4">
                                    <Link
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                        to={`/my-items/${item._id}`}
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
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
