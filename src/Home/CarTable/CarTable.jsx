
const CarTable = ({ car }) => {
    console.log(car)
    const { name, sub_category, price, available_quantity } = car;
    return (
        <tr>
            <td>*</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td><button>View Details</button></td>
        </tr>
    );
};

export default CarTable;