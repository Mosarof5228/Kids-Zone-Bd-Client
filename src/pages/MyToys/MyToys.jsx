
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";




const MyToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user])
    // console.log(myToys)
    return (
        <div>
            <h2>This is my toys page</h2>
        </div>
    );
};

export default MyToys;