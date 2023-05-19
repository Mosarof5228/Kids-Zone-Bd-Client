import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    const { photo, name, price, quantity, rating, saller_email, saller_name, category, subcategory } = singleToy;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img style={{ height: "200px", width: "200px" }} src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl text-purple-600">{name}</h2>
                <h3>Saler_Name:{saller_name}</h3>
                <p>Category:{category}</p>
                <p>SubCategory:{subcategory}</p>
                <p><small>Saller-Email:{saller_email}</small></p>
                <p>Raging:{rating}</p>
                <p>Raging:{quantity}</p>
                <p>Raging:{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;