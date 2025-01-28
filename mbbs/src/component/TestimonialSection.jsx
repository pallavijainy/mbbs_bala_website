import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nisha Patel",
      role: "Student",
      content:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a deep understanding.",
      rating: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
    },
    {
      id: 2,
      name: "Nisha Patel",
      role: "Student",
      content:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a deep understanding.",
      rating: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
    },
    {
      id: 3,
      name: "Nisha Patel",
      role: "Student",
      content:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a deep understanding.",
      rating: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2">
      <div className="mb-12">
        <span className="text-blue-500 font-medium mb-2 block">Testimonial</span>
        <h2 className="text-4xl font-bold mb-4">
          Experiences Shared
          <br />
          by Our Students
        </h2>
        <p className="text-gray-600 mb-6">Our Team Provide 100% Students Satiation From Every Stats.</p>
        <div className="flex justify-evenly items-center gap-7">
          <button className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            View All
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div>
        <div>
          <div>
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-6 rounded-xl bg-[#F9F9FB]">
                  <div className="text-blue-600 text-4xl mb-4">❝</div>
                  <p className="text-gray-700 mb-6">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <svg key={index} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
