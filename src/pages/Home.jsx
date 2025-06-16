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
                <Banner></Banner>
            </section>

            {/* ---------------Craft Items Section--------------- */}
            <section className="py-10 border-2">
                <h3 className="text-2xl md:text-4xl font-bold text-center text-paragraph my-4">Top Art and Craft</h3>
                <p className="text-center text-paragraph text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur soluta ea incidunt? Voluptatibus, aperiam?</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-6 px-4">
                    {items.slice(0, 6).map((item, idx) => (
                        <ItemsCards item={item} key={idx} />
                    ))}
                </div>

                <div className='w-full flex justify-center'>
                    <Link
                        to={"/all-items"}
                        className="mt-8 text-white bg-buttonBg hover:bg-buttonHoverBg shadow-buttonShadow px-6 py-2 rounded-lg font-medium transition"
                    >
                        More Items
                    </Link>
                </div>
            </section>

            {/* ---------------Why chose us--------------- */}
            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>

            {/* --------------- Categories section --------------- */}
            <section>
                <Categories items={items}></Categories>
            </section>

            {/*--------------- join our community ---------------  */}
            <section>
                <JoinCommunity></JoinCommunity>
            </section>

            {/*--------------- join our community ---------------  */}

        </div>
    );
};

export default Home;