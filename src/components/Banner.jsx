import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SlideOne from './SlideOne';
import SliderTwo from './SliderTwo';
import SliderThree from './SliderThree';



const Banner = () => {
    return (
        <div className="h-[85vh] w-full">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className='h-full'
            >
                <SwiperSlide>
                    <SlideOne></SlideOne>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderTwo></SliderTwo>
                </SwiperSlide>
                <SwiperSlide>

                    <SliderThree></SliderThree>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;