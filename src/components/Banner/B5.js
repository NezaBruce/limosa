import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <div className="mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                direction={"vertical"}
                effect={"cube"}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-96"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-full"
                        src="https://legendmotorsuae.com/uploads/vehicle/colors/11f6ec246871de5247d0a3b9f641ee9608.jpg"
                        // src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-full"
                        src="https://images.unsplash.com/photo-1623264025997-7f3e64bec444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMGNydWlzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                        // src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-full"
                        src="https://lacddam.lexusasia.com/lexus-v3-blueprint/models/suv/lx/my22/lx-600-vip/exterior/cropped-vja310r-gkulzq-22vip/my22-lx-600-vip-masthead-exterior-1j7-sonic-titanium.png"
                        // src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
