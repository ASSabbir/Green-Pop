import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from 'sweetalert2';

const Nav = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });


    const { user, handelLogOut } = useContext(AuthContext)
    const handellogoutbtn = () => {
        handelLogOut()
            .then(result => {
                console.log(result)
                Toast.fire({
                    icon: "success",
                    title: "Logout successfully"
                });
            })
            .catch(error => {

            })
    }
    const navber = (
        < >
            <li >
                <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-primary ">
                <Link to={"/products"}>Products</Link>
            </li>
            <li className="hover:text-primary ">
                <Link to={"/aboutus"}>NewsFeeds</Link>
            </li>
            <li className="hover:text-primary ">
                <Link to={"/upcoming"}>UpComing</Link>
            </li>
        </>
    );
    return (
        <div className="max-w-screen-2xl z-10 mx-auto">
            <div className="navbar bg-transparent">
                <div className="navbar-start">

                    <div className="drawer lg:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=""><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg></label>
                        </div>
                        <div className="drawer-side z-40">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-40 min-h-full bg-base-200 text-base-content">
                                {navber}

                            </ul>
                        </div>
                    </div>
                    {/* dropdwn  */}
                    <h1 className=" text-2xl font-bold font-reemKufi">
                        Green <span className="text-primary">Pop</span>{" "}
                    </h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navber}</ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2 lg:gap-10 items-center ">
                        <div className="flex gap-2">
                            <CiSearch />
                            <GoPeople />
                        </div>
                        {
                            user ?
                                <div className="flex items-center gap-3">
                                    
                                        <img alt="" className="w-8 h-8 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-gray-300 ring-offset-gray-100" src={user.photoURL} />
                                    

                                    <button onClick={handellogoutbtn} className="hover:text-primary ">LogOut</button>
                                </div>

                                :
                                <Link to={'/login'}><h1 className="hover:text-primary ">login</h1></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
