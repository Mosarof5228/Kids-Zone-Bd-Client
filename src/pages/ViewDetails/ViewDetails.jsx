import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    const { photo, name, price, quantity, rating, saller_email, saller_name, subcategory } = singleToy;
    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-full w-80" src={photo} alt="Movie" /></figure>
            <div className="card-body font-bold">
                <h2 className="card-title text-2xl font-bold">Name: {name}</h2>
                <h3>Saler_Name:{saller_name}</h3>
                <p>SubCategory: {subcategory}</p>
                <p>Raging:{rating}</p>
                <p>Raging:{quantity}</p>
                <p>Raging:{price}</p>
                <p><small>Email: {saller_email}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Coice This</button>
                </div>
            </div>
        </div>


    );
};

export default ViewDetails;

