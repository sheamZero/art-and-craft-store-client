import { Link } from "react-router-dom";

const JoinCommunity = () => {
    return (

        <div className="bg-teal-50 px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Join Our Creative Community</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                Are you an artist or craftsperson? Share your passion with the world. List your creations, connect with buyers, and grow your craft journey.
            </p>
            <Link to="/register">
                <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition">
                    Register Now
                </button>
            </Link>
        </div>

    );
};

export default JoinCommunity;