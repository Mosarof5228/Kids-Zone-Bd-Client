import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const GalaryPage = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h2>This is galary page</h2>
        </div>
    );
};

export default GalaryPage;