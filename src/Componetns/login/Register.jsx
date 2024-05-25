import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className=' bg-[url("https://i.ibb.co/q9zTxqK/tadeusz-lakota-w-Wd-soca-X9-U-unsplash.jpg")]  absolute blur-sm   h-screen bg-cover bg-center  w-full'></div>
            <div className='h-screen flex justify-center items-center'>

                <div className="card lg:card-side flex  bg-base-100 max-w-screen-xl w-full shadow-xl blur-0">
                    <figure className='h-[500px] justify-end flex flex-1 '> <img src='https://i.ibb.co/q9zTxqK/tadeusz-lakota-w-Wd-soca-X9-U-unsplash.jpg' alt="" className=' h-full' />
                    <div className='absolute flex justify-center items-center '>
                            <h1 className='text-7xl text-white font-reemKufi text-center font-bold'>Sign Up</h1>
                        </div></figure>
                    <div className="card-body flex-1 items-center">
                        <div className="card shrink-0 w-full  max-w-sm  bg-base-100">
                            <form className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" placeholder="username" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className=" bg-primary w-full text-white hover:bg-gray-700 duration-200  p-3 text w-56 te">Sign Up</button>
                                </div>

                            </form>
                            
                            <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                                <Link to={'/login'} className="underline text-gray-800">Login</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;