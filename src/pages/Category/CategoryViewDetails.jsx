import { useLoaderData } from "react-router-dom";


const CategoryViewDetails = () => {
    const details = useLoaderData();
    const { name, photo, price, saller_name } = details;
    return (
        <div>
            <h2>This is category beww diedf</h2>
            <h3>Name: {name}</h3>
        </div>
    );
};

export default CategoryViewDetails;