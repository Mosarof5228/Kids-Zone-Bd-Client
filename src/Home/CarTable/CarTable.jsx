import { Link } from "react-router-dom";

const CarTable = ({ car }) => {
    console.log(car)
    const { name, sub_category, price, available_quantity, _id } = car;
    return (
        <tr>
            <td>*</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            {/* <td><button>View Details</button></td> */}
            <td><Link to={`/viewDetails/${_id}`} className="btn btn-primary">View Details</Link></td>
        </tr>
    );
};

export default CarTable;