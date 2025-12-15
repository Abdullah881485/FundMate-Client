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
    <div data-aos="fade-up" className="w-[90%] mx-auto ">
      <h1 className="title-text text-center font-bold text-3xl my-5">
        Customer Feedback
      </h1>

      <div className="py-10">
        <Swiper
          loop
          centeredSlides
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="my-12"
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="bg-base-200 rounded-2xl shadow-md p-8 text-center transition-all duration-300 group">
                <img
                  src={feedback.photo}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 ring-2 ring-primary/20 object-cover"
                />

                <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                  “{feedback.message}”
                </p>

                <h3 className="font-semibold text-base-content/90">
                  {feedback.name}
                </h3>

                <span className="text-xs text-base-content/50">
                  {feedback.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
