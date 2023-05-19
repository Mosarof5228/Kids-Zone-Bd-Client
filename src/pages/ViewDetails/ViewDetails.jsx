import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    const { photo, name, price, quantity, rating, saller_email, saller_name, category, subcategory } = singleToy;
    return (
        // <div className="card lg:card-side bg-base-100 shadow-xl">
        //     <figure><img style={{ width: "200px" }} src={photo} alt="Album" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title text-4xl text-purple-600">{name}</h2>
        //         <h3>Saler_Name:{saller_name}</h3>
        //         <p>Category:{category}</p>
        //         <p>SubCategory:{subcategory}</p>
        //         <p><small>Saller-Email:{saller_email}</small></p>
        //         <p>Raging:{rating}</p>
        //         <p>Raging:{quantity}</p>
        //         <p>Raging:{price}</p>

        //     </div>
        // </div>

        <div className="flex gap-8 shadow-xl">
            <div className="w-[50%]">
                <figure><img className="image-full" src={photo} alt="Album" /></figure>
            </div>
            <div className=" flex justify-center">
                <div>
                    <h2 className=" text-4xl text-purple-600">{name}</h2>
                    <h3>Saler_Name:{saller_name}</h3>
                    <p>Category:{category}</p>
                    <p>SubCategory:{subcategory}</p>
                    <p><small>Saller-Email:{saller_email}</small></p>
                    <p>Raging:{rating}</p>
                    <p>Raging:{quantity}</p>
                    <p>Raging:{price}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;