// Partners.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";

const partners = [
  {
    id: 1,
    name: "BankOne",
    logo: "https://i.ibb.co.com/G4VkCL7Y/bank-one-logo-png-seeklogo-16346.png",
  },
  {
    id: 2,
    name: "NGO Support",
    logo: "https://i.ibb.co.com/TMM04CTY/NGOSC-high-res-1.png",
  },
  {
    id: 3,
    name: "MicroFund",
    logo: "https://i.ibb.co.com/PsgVtr96/OIP.webp",
  },
  {
    id: 4,
    name: "FinanceCorp",
    logo: "https://i.ibb.co.com/jkW9DCrv/R.png",
  },
  {
    id: 5,
    name: "LoanPartner",
    logo: "https://i.ibb.co.com/xSpzSCgX/money-hand-logo-design-474888-2087.jpg",
  },
];

const Partners = () => {
  return (
    <div className="py-12 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 title-text">
        Our Partners
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {partners.map((partner, i) => (
          <SwiperSlide key={i}>
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-15 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
