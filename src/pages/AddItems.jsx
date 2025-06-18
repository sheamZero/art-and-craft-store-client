import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddItems = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch("http://localhost:5000/items", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You successfully add an item!",
                        icon: "success"
                    });
                }
            })
        reset();
    };

    return (
        <div className="bg-background min-h-screen flex items-center justify-center px-4 py-12">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg space-y-6">
                <h2 className="text-3xl font-bold text-teal-600 font-quicksand text-center">Add New Craft Item</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Image URL</label>
                        <input
                            type="url"
                            {...register('image', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {errors.image && <p className="text-red-500 text-sm">Image URL is required</p>}
                    </div>

                    {/* Item Name */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Item Name</label>
                        <input
                            type="text"
                            {...register('item_name', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {errors.item_name && <p className="text-red-500 text-sm">Item name is required</p>}
                    </div>

                    {/* Subcategory */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Subcategory</label>
                        <input
                            type="text"
                            {...register('subcategory_Name', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {errors.subcategory_Name && <p className="text-red-500 text-sm">Subcategory is required</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Price ($)</label>
                        <input
                            type="number"
                            step="0.1"
                            {...register('price', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {errors.price && <p className="text-red-500 text-sm">Price is required</p>}
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Rating (1-5)</label>
                        <input
                            type="number"
                            step="0.1"
                            min="1"
                            max="5"
                            {...register('rating', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {errors.rating && <p className="text-red-500 text-sm">Rating is required</p>}
                    </div>

                    {/* Customization */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Customization</label>
                        <select
                            {...register('customization', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {errors.customization && <p className="text-red-500 text-sm">Select an option</p>}
                    </div>

                    {/* Processing Time */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Processing Time</label>
                        <input
                            type="text"
                            {...register('processing_time')}
                            placeholder="e.g., 3 days"
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Stock Status */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">Stock Status</label>
                        <select
                            {...register('stockStatus', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            <option value="">Select</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                        {errors.stockStatus && <p className="text-red-500 text-sm">Select a status</p>}
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">User Email</label>
                        <input
                            type="email"
                            {...register('user_email', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {errors.user_email && <p className="text-red-500 text-sm">Email is required</p>}
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-1">User Name</label>
                        <input
                            type="text"
                            {...register('user_name', { required: true })}
                            className="w-full border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {errors.user_name && <p className="text-red-500 text-sm">Name is required</p>}
                    </div>
                </div>

                {/* Short Description */}
                <div>
                    <label className="block text-gray-800 font-medium mb-1">Short Description</label>
                    <textarea
                        {...register('short_description')}
                        className="w-full border border-teal-300 rounded-lg px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-teal-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition"
                    >
                        Add Craft Item
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddItems;
