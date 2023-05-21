
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTable from "./MyToyTable";




const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`https://kids-zone-bd-server.vercel.app/allToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kids-zone-bd-server.vercel.app/alltoys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingToys = myToys.filter(toys => toys._id !== id)
                            setMyToys(remainingToys)
                            Swal.fire(
                                'Deleted Toy Successfully '
                            )
                        }
                    })
            }
        })
    }

    return (


        <div className="mb-8">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="border-double border-4 border-indigo-500">
                            <th>No</th>
                            <th>image</th>
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
                                handleDelete={handleDelete}
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