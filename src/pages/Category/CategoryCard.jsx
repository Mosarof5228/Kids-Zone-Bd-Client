import { Link } from "react-router-dom";


const CategoryCard = ({ categoryData }) => {
    console.log(categoryData)
    const { photo, price, quantity, rating, subcategory, name, _id

    } = categoryData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="h-[50%] bg-gray-300">
                <figure><img className="h-48 w-full" src={photo} alt="Shoes" /></figure>
            </div>
            <div className="card-body shadow-lg fw-bold bg-[#D7F0EC]">
                <h2 className="card-title">Name:{name}</h2>
                <p>SubCategory:{subcategory}</p>
                <p>Quantity:{quantity}</p>
                <p>Rating:{rating}</p>
                <p>Price:{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/categoryViewDetails/${_id}`}><button className="btn btn-primary ">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;