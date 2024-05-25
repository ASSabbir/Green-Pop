import React from 'react';
import imge from '../../assets/login.jpg'
const Login = () => {
    return (
        <div className='h-screen'>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='h-[500px] justify-end flex flex-1 '> <img src={imge} alt="" className=' h-full' /></figure>
                <div className="card-body flex-1">
                    <div className="card shrink-0 w-full  max-w-sm  bg-base-100">
                        <form className="card-body space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;