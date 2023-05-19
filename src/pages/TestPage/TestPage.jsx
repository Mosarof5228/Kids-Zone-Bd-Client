import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const TestPage = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>This is test page</h2>
        </div>
    );
};

export default TestPage;