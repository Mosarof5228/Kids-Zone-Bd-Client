import { Link } from "react-router-dom";


const MyToyTable = ({ myToy, handleDelete }) => {
    console.log(myToy)
    const { name, subcategory, price, quantity, _id, photo } = myToy;

    return (
        <tr className="border  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold ">
            <td>#</td>
            <td>
                <img className="w-24 h-24" src={photo} alt="" />
            </td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/editDetails/${_id}`} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Edit</Link></td>
            <td><button onClick={() => handleDelete(_id)} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Delete</button></td>
        </tr>
    );
};

export default MyToyTable;