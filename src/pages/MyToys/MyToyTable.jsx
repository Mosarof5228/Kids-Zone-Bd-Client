import { Link } from "react-router-dom";


const MyToyTable = ({ myToy }) => {
    console.log(myToy)
    const { name, subcategory, price, quantity, _id } = myToy;
    return (
        <tr className="border border-4 border-indigo-600 bg-indigo-400 ">
            <td>#</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/viewDetails/${_id}`} className="btn btn-primary">View Details</Link></td>
        </tr>
    );
};

export default MyToyTable;