import { Link, useLoaderData } from 'react-router-dom';

const Allitems = () => {
    const items = useLoaderData();
    // console.log(items);

    return (
        <div className="bg-background min-h-screen px-4 py-8">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-teal-700 my-6">
                All Art and Craft
            </h3>

            <div className="overflow-x-auto rounded-xl border border-teal-200 bg-white shadow-md">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-teal-100 text-gray-800">
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Subcategory</th>
                            <th>User Email</th>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-900">
                        {
                            items.map((item, idx) => (
                                <tr key={idx} className="hover:bg-teal-50 transition">
                                    <th>{idx + 1}</th>
                                    <td>{item.item_name}</td>
                                    <td>{item.subcategory_Name}</td>
                                    <td>{item.user_email}</td>
                                    <td>{item.user_name}</td>
                                    <td>
                                        <Link
                                            to={`/all-items/${item._id}`}
                                            className="btn bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-md text-sm transition font-medium"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allitems;
