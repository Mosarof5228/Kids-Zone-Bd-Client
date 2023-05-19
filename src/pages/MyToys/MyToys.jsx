
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTable from "./MyToyTable";




const MyToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    console.log(myToys)
    return (


        <div className="mb-8">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="border-double border-4 border-indigo-500">
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
                            myToys.map(myToy => <MyToyTable
                                key={myToy._id}
                                myToy={myToy}
                            ></MyToyTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>








        // <div>
        //     <h2>This is my toys page</h2>
        //     {
        //         myToys.map(myToy => <MyToyTable
        //             key={myToy._id}
        //             myToy={myToy}
        //         ></MyToyTable>)
        //     }
        // </div>
    );
};

export default MyToys;