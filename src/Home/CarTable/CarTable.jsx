import { Link } from "react-router-dom";

const CarTable = ({ car }) => {
    console.log(car)
    const { name, subcategory, price, quantity, _id } = car;
    return (
        <tr >
            <td className="bg-purple-600">*</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            {/* <td><button>View Details</button></td> */}
            <td><Link to={`/viewDetails/${_id}`} className="btn bg-purple-700">View Details</Link></td>
        </tr>
    );
};

export default CarTable;