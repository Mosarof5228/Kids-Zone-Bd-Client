import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const updateToy = useLoaderData();
    const { _id } = updateToy;
    console.log(updateToy);
    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        // const description = form.details.value;
        const updateToy = { price, quantity }
        console.log(updateToy);

        fetch(`http://localhost:5000/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'The Internet?',
                        'That thing is still around?',
                        'question'
                    )
                }
            })
    }




    return (
        <form onSubmit={handleUpdateToy}>

            <input type="text" placeholder="price" name="price" className="input input-bordered input-primary w-full max-w-xs mr-4" />
            <input type="text" placeholder="quantity" name="quantity" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="Update" />
        </form>
    );
};

export default UpdateToys;