
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }


    const navItems = <>
        <button className="mr-4 font-bold" ><Link to='/'>Home</Link></button>
        <button className="mr-4 font-bold" ><Link to='/allToys'>All Toys</Link></button>
        <button className="mr-4 font-bold" ><Link to='/blog'>Blog</Link></button>

        {
            user ? <>
                <li className="font-bold" ><Link to='myToys'>MyToys</Link></li>
                <li className="font-bold" ><Link to='addToy'>AddToy</Link></li>
            </> : ""

        }

    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-4 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src="https://dlkidzo.backdt.com/demos/img/logo/logo_01.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <nav className="navbar-end">
                {
                    user ? <>
                        <img className=' rounded-full mr-2' style={{ height: "45px", width: "45px" }} title={user.displayName} src={user.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Logout</button>

                    </> : <Link to='/login'><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">LogIn</button></Link>
                }


            </nav>
        </div>
    );
};

export default Navbar;