

const CategoryCard = ({ categoryData }) => {
    console.log(categoryData)
    const { photo, price, quantity, rating, subcategory, saller_name

    } = categoryData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body fw-bold">
                <h2 className="card-title">Name:{name}</h2>
                <p>SubCategory:{subcategory}</p>
                <p>Quantity:{quantity}</p>
                <p>Rating:{rating}</p>
                <p>Price:{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;