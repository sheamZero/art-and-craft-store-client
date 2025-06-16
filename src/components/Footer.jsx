import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-teal-100 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Website Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">Art & Craft Store</h2>
                    <p className="text-sm">Bringing creativity to life with handmade art and unique crafts.</p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p>Email: contact@artcraftstore.com</p>
                    <p>Phone: +880 1234 567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-400">
                            <FaFacebook></FaFacebook>
                            <span>Facebook</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-pink-400">
                            <FaInstagram></FaInstagram>
                            <span>Instagram</span>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-300">
                            <FaTwitter></FaTwitter>
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-400 text-sm mt-10">
                © {new Date().getFullYear()} Art & Craft Store. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
