import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const {id} = useParams();
    // console.log(id);
    return (
        <div>
            items Details
        </div>
    );
};

export default ItemDetails;