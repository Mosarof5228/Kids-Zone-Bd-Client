import { useState } from "react";
import { useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
import CarTable from "../CarTable/CarTable";


const AllToys = () => {
    const [toyCars, setToyCars] = useState([]);
    const [textSearch, setTextSearch] = useState('');
    // const toyCars = useLoaderData();
    // console.log(toyCars);
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToyCars(data))
    }, [])

    const handleTextSearch = () => {
        fetch(`http://localhost:5000/toySearch/${textSearch}`)
            .then((res) => res.json())
            .then((data) => {
                setToyCars(data);
            });
    };

    return (

        <div>
            <input onChange={(event) => { setTextSearch(event.target.value) }} type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <button onClick={handleTextSearch} className="btn btn-secondary">Button</button>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="border border-4 border-indigo-600 bg-indigo-400">
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