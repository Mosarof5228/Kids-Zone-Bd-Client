

const AddToy = () => {
    const handleAddToy = (event) => {
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const saller_name = form.sallerName.value;
        const saller_email = form.sallerEmail.value;
        const subcategory = form.subCategory.value;
        const price = form.price.value;
        const raging = form.raging.value;
        const quantity = form.quantity.value;
        const toy = {
            name,
            photo,
            saller_name,
            saller_email,
            subcategory,
            price,
            raging,
            quantity,
        }
        console.log(toy)

    }
    return (
        <form onSubmit={handleAddToy} >
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div>
                    <input className="input input-bordered mr-5" type="text" name="name" id="" placeholder="name" />
                    <input className="input input-bordered mr-5" type="text" name="photo" id="" placeholder="photo" />
                    <input className="input input-bordered mr-5" type="text" name="sallerName" id="" placeholder="Saller Name" />
                    <input className="input input-bordered mr-5" type="email" name="salerEmail" placeholder="saler email" id="" />
                    <input className="input input-bordered mr-5" type="text" name='subCategory' placeholder="sub category" />
                </div>
                <div>

                    <input className="input input-bordered" type="number" name="price" id="" placeholder="Price" />
                    <input className="input input-bordered" type="number" name="rating" id="" placeholder="Rating" />
                    <input className="input input-bordered" type="number" name="quantity" id="" placeholder="A.Quantity" />
                    <input className="input input-bordered" type="submit" value="Add toy" />

                </div>
            </div>
        </form>
    );
};

export default AddToy;