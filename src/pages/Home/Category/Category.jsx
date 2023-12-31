import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// images
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <div className='my-16'>
            <SectionTitle
                subHeading={"From 10.00am-11.00pm"}
                heading={"Order Online"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h3 className='text-3xl text-center uppercase -mt-12 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h3 className='text-3xl text-center uppercase -mt-12 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h3 className='text-3xl text-center uppercase -mt-12 text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h3 className='text-3xl text-center uppercase -mt-12 text-white'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h3 className='text-3xl text-center uppercase -mt-12 text-white'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;