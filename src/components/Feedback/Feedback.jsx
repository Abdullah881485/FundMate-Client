import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Entrepreneur",
      photo:
        "https://i.ibb.co.com/JF7C6SpX/business-woman-isolated-illustration-ai-generative-free-png.png",
      message:
        "LoanLink helped me grow my small business. The process was fast and simple!",
    },
    {
      id: 2,
      name: "Ali Khan",
      role: "Student",
      photo:
        "https://i.ibb.co.com/S4rNB4JN/pngtree-casual-young-man-vertical-png-image-9976913.png",
      message:
        "I got my education loan in no time. Highly recommend LoanLink for students.",
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Freelancer",
      photo:
        "https://i.ibb.co.com/pjT6JnBC/business-woman-isolated-illustration-ai-generative-png.png",
      message:
        "The approval process was smooth, and I could track my loan easily on the dashboard.",
    },
    {
      id: 4,
      name: "Rohan Das",
      role: "Small Business Owner",
      photo:
        "https://i.ibb.co.com/67tscvBq/smiling-man-with-arms-crossed-on-transparent-background-png.png",
      message:
        "Applying for a microloan was straightforward and transparent. Loved the interface!",
    },
    {
      id: 5,
      name: "Anika Roy",
      role: "Teacher",
      photo:
        "https://i.ibb.co.com/LhqK0bnJ/young-smiling-woman-looking-at-camera-with-crossed-arms-isolated-illustration-ai-generative-free-png.png",
      message:
        "LoanLink made borrowing easy and stress-free. Great support and clear process.",
    },
  ];
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="title-text text-center font-bold text-3xl my-5">
        Customer Feedback
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper my-10"
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide>
            <div
              key={feedback.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={feedback.photo}
                alt={feedback.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 mb-4">"{feedback.message}"</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {feedback.name}
              </h3>
              <span className="text-sm text-gray-500">{feedback.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
