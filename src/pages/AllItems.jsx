import { Link, useLoaderData } from 'react-router-dom';

const Allitems = () => {
    const items = useLoaderData();
    console.log(items);

    return (
        <div>
            <h3 className="text-2xl md:text-4xl font-bold text-center text-paragraph my-4">All Art and Craft</h3>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item_Name</th>
                            <th>Subcategory_Name</th>
                            <th>User_Email</th>
                            <th>User_Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            items.map((item, idx) => (
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{item.item_name}</td>
                                    <td>{item.subcategory_Name}</td>
                                    <td>{item.user_email}</td>
                                    <td>{item.user_name}</td>
                                    <td><Link to={`/all-items/${item._id}`} className='btn hover:btn-secondary'>View Details</Link></td>
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