import { BsBoxSeam, BsSun } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import my1 from '../../assets/1.png';
import my2 from '../../assets/2.png';
import my3 from '../../assets/3.png';


const TakeCare = () => {
    
    return (
        <div className="space-y-10">
            <div className="text-center space-y-7">
                <h1 className="text-[64px] font-reemKufi font-bold">Steps to take care of your <span className="text-primary">plants</span></h1>
                <p className="text-gray-400 font-poppins">By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients -  you'll be well on your way to <br /> maintaining healthy and thriving plants.</p>

            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 ">
                <div className="flex flex-col items-center space-y-4 p-5">
                    <div className="w-[72px] h-[72px] rounded-full bg-primary flex justify-center items-center text-3xl text-white">
                        <IoWaterOutline />
                    </div>
                    <h1 className="text-xl font-semibold">Watering</h1>
                    <p className="text-gray-400 max-w-[456px] pb-5 md:pb-36 font-extralight">water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.</p>
                    <img src={my2} alt="" />
                </div>
                <div className="flex flex-col items-center space-y-4 p-5">
                    <div className="w-[72px] h-[72px]  rounded-full bg-primary flex justify-center items-center text-3xl text-white">
                        <BsSun />
                    </div>
                    <h1 className="text-xl font-semibold">Sunlight</h1>
                    <p className="text-gray-400 max-w-[456px] pb-5 md:pb-36  font-extralight">Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs</p>
                    <img src={my3} alt="" />
                </div>
                <div className="flex flex-col items-center space-y-4 p-5">
                    <div className="w-[72px] h-[72px] rounded-full bg-primary flex justify-center items-center text-3xl text-white">
                        <BsBoxSeam />
                    </div>
                    <h1 className="text-xl font-semibold">Nutrients and Fertilizing</h1>
                    <p className="text-gray-400 max-w-[456px] pb-5 md:pb-36  font-extralight">Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.</p>
                    <div className="space-y-8">
                        <img src={my1} alt="" />
                        <p className="max-w-[456px] text-wrap text-gray-400 font-extralight">Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!</p>
                        <button className=" bg-primary text-white hover:bg-gray-700 duration-200  p-3 text w-56 te">See more photos</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TakeCare;