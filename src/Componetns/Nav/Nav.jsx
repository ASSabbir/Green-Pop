import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

const Nav = () => {
    const navber = (
        < >
            <li >
                <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-primary ">
                <Link to={"/products"}>Products</Link>
            </li>
            <li className="hover:text-primary ">
                <Link to={"/aboutus"}>About Us</Link>
            </li>
        </>
    );
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 h-screen"
                        >
                            {navber}
                        </ul>
                    </div> */}
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
                    <div className="flex gap-3 items-center ">
                        <CiSearch />
                        <GoPeople />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
