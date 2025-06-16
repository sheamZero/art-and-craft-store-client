import Lottie from "lottie-react";
import slider_two_image from "../assets/lottie/slider_two_image.json";

const SliderTwo = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 bg-teal-50">
            {/* Lottie Animation */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Lottie
                    animationData={slider_two_image}
                    loop={true}
                    className="w-72 md:w-[400px] lg:w-[500px]"
                />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-8 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-bold text-teal-600">
                    Shadows & Structure
                </h2>
                <p className="text-lg max-w-xl mx-auto md:mx-0 text-gray-700">
                    Colorful characters, heroic sketches, and fun-filled frames — enter the animated world of cartoons.
                </p>
                <button className="mt-4 bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-lg font-medium transition">
                    Explore Collection
                </button>
            </div>
        </div>
    );
};

export default SliderTwo;
