import { useLoaderData } from "react-router-dom";


const UpdateToys = () => {
    const updateToy = useLoaderData();
    console.log(updateToy);
    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        // const description = form.details.value;
        const updateToy = { price, quantity }
        console.log(updateToy);

    }

    return (
        <form onSubmit={handleUpdateToy}>

            <input type="text" placeholder="price" name="price" className="input input-bordered input-primary w-full max-w-xs mr-4" />
            <input type="text" placeholder="quantity" name="quantity" className="input input-bordered input-primary w-full max-w-xs" />
        </form>
    );
};

export default UpdateToys;