// https://i.ibb.co/rvPgcPd/scott-webb-ws-Mw-Dx-F8-SKA-unsplash.jpg
// https://i.ibb.co/kxctjqB/scott-webb-h-Dy-O6rr3kqk-unsplash.jpg

import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div >
             <div id="slide1" className="carousel-item min-h-[calc(100vh-70px)] relative w-full">
                    <div className="bg-[url('https://i.ibb.co/kxctjqB/scott-webb-h-Dy-O6rr3kqk-unsplash.jpg')] bg-no-repeat bg-center bg-cover w-full">
                        <div className="md:w-1/2  space-y-10 md:p-20 flex flex-col p-3 pt-10 h-full  md:justify-center">
                            <h1 className="text-7xl font-reemKufi font-bold">The Benefits of indoor plants</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sed accusamus doloremque nesciunt. Iure ex nulla expedita alias? Hic, harum!</p>
                            <button className=" bg-primary text-white hover:bg-gray-700 duration-200  p-3 text w-56 te">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-Start left-20 cursor-pointer  bottom-10 gap-2 items-center hover:text-primary duration-200 text-gray-400">
                       <h1>Learn Gardening  </h1>
                       <FaArrowRight className="font-thin"></FaArrowRight>
                    </div>
                </div>
                
            </div>
           
        
    )


};

export default Banner;
// {/* <div id="slide1" className="carousel-item min-h-[calc(100vh-70px)] relative w-full">
//                     <div className="bg-[url('https://i.ibb.co/kxctjqB/scott-webb-h-Dy-O6rr3kqk-unsplash.jpg')] bg-no-repeat bg-center bg-cover w-full">
//                         <div className="w-1/2 space-y-8 p-20 flex flex-col h-full  justify-center">
//                             <h1 className="text-7xl font-reemKufi font-bold">The Benefits of indoor plants</h1>
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sed accusamus doloremque nesciunt. Iure ex nulla expedita alias? Hic, harum!</p>
//                             <button className=" bg-primary text-white hover:bg-gray-700 duration-200  p-3 text w-56 te">Shop Now</button>
//                         </div>
//                     </div>
//                     <div className="absolute flex justify-Start transform -translate-y-1/2 left-5 right-5 bottom-2 gap-2 items-center text-gray-400">
//                         <a href="#slide3" className="text-lg font-light hover:text-primary duration-150">PREV</a>
//                         <div className="text-base font-light">/</div>
//                         <a href="#slide2" className="text-lg font-light hover:text-primary duration-150">NEXT</a>
//                     </div>
//                 </div> */}