import { useState } from "react";
import { useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
import CarTable from "../CarTable/CarTable";


const AllToys = () => {
    const [toyCars, setToyCars] = useState([]);
    // const toyCars = useLoaderData();
    // console.log(toyCars);
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToyCars(data))
    }, [])
    return (

        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Sub_category</th>
                            <th>price</th>
                            <th>available_quantity</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            toyCars.map(car => <CarTable
                                key={car._id}
                                car={car}
                            ></CarTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default AllToys;