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
        fetch('https://kids-zone-bd-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToyCars(data))
    }, [])

    const handleTextSearch = () => {
        fetch(`https://kids-zone-bd-server.vercel.app/toySearch/${textSearch}`)
            .then((res) => res.json())
            .then((data) => {
                setToyCars(data);
            });
    };

    return (

        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="mx-auto text-center py-4">
                <input onChange={(event) => { setTextSearch(event.target.value) }} type="text" placeholder="Type here" className="input w-full max-w-xs bg-black-500 py-4 " />
                <button onClick={handleTextSearch} className="btn bg-purple-700 border-none">Button</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="">
                        <tr className="border border-4 border-indigo-600">
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