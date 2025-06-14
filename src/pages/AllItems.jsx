import { Link, useLoaderData } from 'react-router-dom';
import ItemsCards from '../components/ItemsCards';

const Allitems = () => {
    const items = useLoaderData();

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
                            <th>User_Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><Link>View Details</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Allitems;