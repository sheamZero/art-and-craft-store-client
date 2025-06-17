import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemsCards from "./ItemsCards";


const SubcategoriesCard = () => {
    const [items, setItems] = useState([]);
    const { sub_name } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/subcategory/${sub_name}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [sub_name])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                items.map(item => <ItemsCards key={item._id} item={item}></ItemsCards>)
            }
        </div>
    );
};

export default SubcategoriesCard;