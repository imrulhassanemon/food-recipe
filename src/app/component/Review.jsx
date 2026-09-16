"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "This platform made it really easy to find the right tools for my development projects. The interface is clean and very easy to use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I really enjoyed using this platform. The technology information is well organized and helped me choose the right stack.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The design is simple, modern and responsive. I especially liked how easy it was to explore different technologies.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=14",
    review:
      "A very useful resource for developers. I found several technologies that I am planning to learn next.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "This platform made it really easy to find the right tools for my development projects. The interface is clean and very easy to use.",
    rating: 5,
  }
];

export default function Review() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 font-semibold text-purple-600">
            Testimonials
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What Developers Say
          </h2>

          <p className="mt-4 text-gray-600">
            See what developers think about our platform and their experience.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                {/* Rating */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <span
                      key={index}
                      className="text-lg text-yellow-400"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="min-h-[120px] text-sm leading-7 text-gray-600">
                  {review.review}
                </p>

                {/* User */}
                <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {review.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

