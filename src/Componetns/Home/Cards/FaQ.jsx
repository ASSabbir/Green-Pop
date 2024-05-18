import React from 'react';

const FaQ = () => {
    return (
        <div>
            <section className="  text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    
                    
                    <div className="text-center space-y-7">
                        <h1 className="text-[64px] font-reemKufi font-bold">Plant <span className="text-primary">FAQs ??</span></h1>
                        <p className="text-gray-400 font-poppins">Find answers to common questions about plant care and shopping policies.</p>

                    </div>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                        <details>
                            <summary className="py-6 outline-none cursor-pointer text-2xl focus:text-primary">How to care for plants?</summary>
                            <div className="px-4 pb-10 text-gray-400">
                                <p>Proper plant care involves watering, sunlight, and regular fertilization. It's important to understand the specific needs of each plant species.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-6 outline-none cursor-pointer text-2xl focus:text-primary">What are the shipping options?</summary>
                            <div className="px-4 pb-10 text-gray-400">
                                <p>We offer various shipping options, including standard and expedited delivery. The shipping cost depends on the size and weight of the plants.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-6 outline-none cursor-pointer text-2xl focus:text-primary">Can I return a plant?</summary>
                            <div className="px-4 pb-10 text-gray-400">
                                <p>Yes, you can return a plant within 14 days of purchase if it arrives damaged or doesn't meet your expectations. Please contact our customer support for assistance.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-6 outline-none cursor-pointer text-2xl focus:text-primary">Do you offer plant care tips?</summary>
                            <div className="px-4 pb-10 text-gray-400">
                                <p>Absolutely! We provide plant care tips and advice on our website. You can also reach out to our plant experts for personalized guidance.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-6 outline-none cursor-pointer text-2xl focus:text-primary">Are the plants healthy?</summary>
                            <div className="px-4 pb-10 text-gray-400">
                                <p>Yes, all our plants are carefully inspected and maintained to ensure they are healthy and thriving. We take pride in delivering high-quality plants to our customers.</p>
                            </div>
                        </details>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaQ;