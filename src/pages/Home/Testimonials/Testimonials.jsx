import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {

    const [reviews, useReviews] = useState();

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => useReviews(data))
    }, [])

    console.log(reviews);

    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"What our Clients Says"}
                heading={"Testimonials"}>
            </SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="mt-5">{review.details}</p>
                                <h3 className="text-2xl uppercase text-orange-500 mt-5">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;