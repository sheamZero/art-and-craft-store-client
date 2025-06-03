import Lottie from "lottie-react";
import slider_three_image from "../assets/lottie/slider_three_image.json";

const SliderThree = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 bg-background">
            {/* Lottie Animation */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Lottie
                    animationData={slider_three_image}
                    loop={true}
                    className="w-72 md:w-[400px] lg:w-[500px]"
                />
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-8 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-bold text-heading">
                    Faces in Lines
                </h2>
                <p className="text-paragraph text-lg max-w-xl mx-auto md:mx-0">
                    Structures emerge from the shadows — precision meets emotion in charcoal forms.
                </p>
                <button className="mt-4 bg-buttonBg hover:bg-buttonHoverBg shadow-buttonShadow text-white px-6 py-2 rounded-lg font-medium transition">
                    Explore Collection
                </button>
            </div>
        </div>
    );
};

export default SliderThree;
