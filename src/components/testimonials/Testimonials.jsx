import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import quote from "../../assets/quote.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { use } from "react";

const TestimonialSlider = ({ allFeedback }) => {
  const feedback = use(allFeedback);
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center font-primaryFont">
          User <span className="text-[#4B29CF]">Testimonials</span>
        </h2>
        <p className="text-gray-600 mb-18 text-xs sm:text-sm font-seconderyFont text-center">
          Real feedback from real professionals.
        </p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          style={{ paddingBottom: "50px" }}
        >
          {feedback.map((user, idx) => (
            <SwiperSlide
              key={idx}
              style={{ width: "400px" }}
              className=" rounded-xl p-6 shadow-md bg-white"
            >
              <div className="flex flex-col items-center">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-700 text-center text-sm">
                  “{user.message}”
                </p>
                <img src={quote} alt="" className="w-6 pt-5 pb-2" />
                <h4 className="font-semibold ">{user.name}</h4>
                <p className="text-sm text-gray-500 mb-2 ">{user.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
