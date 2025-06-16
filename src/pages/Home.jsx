import { Link, useLoaderData } from "react-router-dom";
import Banner from '../components/Banner';
import ItemsCards from '../components/ItemsCards';
import Categories from '../components/Categories';
import WhyChooseUs from '../components/WhyChooseUs';
import JoinCommunity from '../components/JoinCommunity';

const Home = () => {
    const items = useLoaderData();

    return (
        <div>
            {/* ---------------Banner Section --------------- */}
            <section>
                <Banner />
            </section>

            {/* ---------------Craft Items Section--------------- */}
            <section className="py-10  bg-teal-50">
                <h3 className="text-2xl md:text-4xl font-bold text-center text-teal-700 my-4">
                    Top Art and Craft
                </h3>
                <p className="text-center text-gray-700  text-lg mb-8">
                    Breathe in the calm of handmade landscape art — mountains, trees, and sky in perfect balance.

                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-6 px-4">
                    {items.slice(0, 6).map((item, idx) => (
                        <ItemsCards item={item} key={idx} />
                    ))}
                </div>

                <div className='w-full flex justify-center'>
                    <Link
                        to={"/all-items"}
                        className="mt-8 text-white bg-teal-600 hover:bg-teal-500 shadow-teal-500 px-6 py-2 rounded-lg font-medium transition"
                    >
                        More Items
                    </Link>
                </div>
            </section>

            {/* ---------------Why Choose Us--------------- */}
            <section>
                <WhyChooseUs />
            </section>

            {/* ---------------Categories Section--------------- */}
            <section>
                <Categories items={items} />
            </section>

            {/*--------------- Join Our Community --------------- */}
            <section>
                <JoinCommunity />
            </section>
        </div>
    );
};

export default Home;
