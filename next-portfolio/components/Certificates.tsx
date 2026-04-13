// components/Certificates.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const certificates = [
  { id: 1, src: "/Certificates/backend.ppg", title: "Certificate 1" },
  { id: 2, src: "/Certificates/cert2.jpg", title: "Certificate 2" },
  { id: 3, src: "/Certificates/Python.jpg", title: "Certificate 3" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-[#1a1a1a] text-white">
      <h2 className="text-4xl text-center text-gray-200 tracking-widest uppercase mb-12">
        Certificates
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={30}
      >
        {certificates.map((cert) => (
          <SwiperSlide key={cert.id}>
            <img
              src={cert.src}
              alt={cert.title}
              className="rounded-lg w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}