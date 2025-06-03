import Lottie from "lottie-react";
import safe_secure from '../assets/lottie/safe_secure.json';
import help from '../assets/lottie/help.json';
import original from '../assets/lottie/original.json';

const WhyChooseUs = () => {
    return (
        <div className="px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-heading mb-4">Why Choose Craft!qo?</h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mb-6">
                We celebrate the beauty of handmade. Every item is crafted with passion, supporting artists directly and ensuring you get one-of-a-kind creations.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-paragraph">
                <div className="flex flex-col items-center">
                    <span className="text-4xl">
                        <Lottie className="w-20 h-20" animationData={original}></Lottie>
                    </span>
                    <p>Original Handmade Art</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl">
                        <Lottie className="w-24 h-20" animationData={help}></Lottie>
                    </span>
                    <p>Support Local Artists</p>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl">
                        <Lottie className="w-20 h-20" animationData={safe_secure}></Lottie>
                    </span>
                    <p>Safe & Secure Checkout</p>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;
