import Lottie from "lottie-react";
import safe_secure from '../assets/lottie/safe_secure.json';
import help from '../assets/lottie/help.json';
import original from '../assets/lottie/original.json';

const WhyChooseUs = () => {
    return (
        <div className="px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">Why Choose Craft!qo?</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10 ">
                We celebrate the beauty of handmade. Every item is crafted with passion, supporting artists directly and ensuring you get one-of-a-kind creations.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-12 text-sm text-teal-600">
                <div className="flex flex-col items-center max-w-xs">
                    <Lottie className="w-24 h-24" animationData={original} />
                    <p className="mt-4 font-medium">Original Handmade Art</p>
                </div>
                <div className="flex flex-col items-center max-w-xs">
                    <Lottie className="w-24 h-24" animationData={help} />
                    <p className="mt-4 font-medium">Support Local Artists</p>
                </div>

                <div className="flex flex-col items-center max-w-xs">
                    <Lottie className="w-24 h-24" animationData={safe_secure} />
                    <p className="mt-4 font-medium">Safe & Secure Checkout</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
