import { useLoaderData } from 'react-router-dom';
import ItemsCards from '../components/ItemsCards';

const Allitems = () => {
    const items = useLoaderData();

    return (
        <div>
            <h3 className="text-2xl md:text-4xl font-bold text-center text-paragraph my-4">All Art and Craft</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-6 px-4">
                {
                    items.map(item => <ItemsCards key={item._id} item={item}></ItemsCards>)
                }
            </div>

        </div>
    );
};

export default Allitems;