import { Link } from "react-router-dom";

const CarTable = ({ car }) => {
    console.log(car)
    const { name, subcategory, price, quantity, _id } = car;
    return (
        <tr >
            <td className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">*</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/viewDetails/${_id}`} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">View Details</Link></td>
        </tr>
    );
};

export default CarTable;