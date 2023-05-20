import { Link } from "react-router-dom";


const MyToyTable = ({ myToy, handleDelete }) => {
    console.log(myToy)
    const { name, subcategory, price, quantity, _id, photo } = myToy;

    return (
        <tr className="border border-4 border-indigo-600 bg-indigo-400 ">
            <td>#</td>
            <td>
                <img className="w-24 h-24" src={photo} alt="" />
            </td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/editDetails/${_id}`} className="btn btn-primary">Edit</Link></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete(X)</button></td>
        </tr>
    );
};

export default MyToyTable;