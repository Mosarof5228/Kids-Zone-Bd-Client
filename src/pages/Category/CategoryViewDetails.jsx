import { useLoaderData } from "react-router-dom";


const CategoryViewDetails = () => {
    const details = useLoaderData();
    console.log(details)
    const { name, photo, price, saller_name, saller_email, category, quantity } = details;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-80 w-80 p-4" src={photo} alt="Movie" /></figure>
            <div className="card-body">

                <h2 className="card-title">Saller Name: {saller_name}</h2>
                <p>Category: {category}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p><small>saller_email: {saller_email}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryViewDetails;