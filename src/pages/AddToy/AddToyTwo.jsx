
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';


const AddToyTwo = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const saller_name = form.sallerName.value;
        const saller_email = form.salerEmail.value;
        const subcategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const singleToy = {
            name,
            photo,
            saller_name,
            saller_email,
            subcategory,
            price,
            rating,
            quantity,
        }
        console.log(singleToy)
        fetch("http://localhost:5000/addedToys", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleToy),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'close this'
                    })
                }
            })





    }
    return (
        <form onSubmit={handleAddToy} className="mb-8 px-2 mx-2 md:mx-4 " >
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 ">

                <input className="input input-bordered " type="text" name="name" id="" placeholder="name" />
                <input className="input input-bordered " type="text" name="photo" id="" placeholder="photo" />
                <input className="input input-bordered " type="text" name="sallerName" id="" placeholder="Saller Name" />
                <input className="input input-bordered " type="email" name="salerEmail" value={user.email} placeholder="saler email" id="" />
                <input className="input input-bordered " type="text" name='subCategory' value={user.displayName} placeholder="sub category" />


                <input className="input input-bordered" type="text" name="price" id="" placeholder="Price" />
                <input className="input input-bordered" type="text" name="rating" id="" placeholder="Rating" />
                <input className="input input-bordered" type="text" name="quantity" id="" placeholder="A.Quantity" />

            </div>
            <input className="input input-bordered mt-4 w-1/3 mx-auto bg-purple-500 text-white ml-[25%]" type="submit" value="Add toy" />

        </form>
    );
};

export default AddToyTwo;