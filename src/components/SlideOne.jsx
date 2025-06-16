import Lottie from "lottie-react";
import slider_image from "../assets/lottie/slider_image.json";

const SlideOne = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 bg-teal-50">
            {/* Lottie Animation */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Lottie
                    animationData={slider_image}
                    loop={true}
                    className="w-72 md:w-[400px] lg:w-[500px]"
                />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4 mt-8 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-bold text-teal-600">
                    Nature on Canvas
                </h2>
                <p className="text-lg max-w-xl mx-auto md:mx-0 text-gray-700">
                    Breathe in the calm of handmade landscape art — mountains, trees, and sky in perfect balance.
                </p>
                <button
                    className="mt-4 text-white bg-teal-600 hover:bg-teal-500 shadow-md px-6 py-2 rounded-lg font-medium transition"
                >
                    Explore Collection
                </button>
            </div>
        </div>
    );
};

export default SlideOne;
