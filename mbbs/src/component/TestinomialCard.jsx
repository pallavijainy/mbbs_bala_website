import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialCard = () => {

  const reviews = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
      name: "Rajat Pradhan",
      role: "Student",
      review:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate.",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
      name: "Rajat Pradhan",
      role: "Student",
      review:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate.",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
      name: "Rajat Pradhan",
      role: "Student",
      review:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate.",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
      name: "Rajat Pradhan",
      role: "Student",
      review:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate.",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
      name: "Rajat Pradhan",
      role: "Student",
      review:
        "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {reviews?.map((el) => (
          <div className="max-w-md space-y-5 mt-10">
            <div className=" border-gray-400 border p-5 rounded-3xl relative">
              <div className="absolute -top-4 bg-white left-[45%]">
                <div className="border border-gray-400 rounded-full w-8 h-8 flex justify-center items-center">
                  <FaQuoteLeft color="blue" />
                </div>
              </div>

              <p className="text-2xl text-[#808080] p-5">
                {el.review}
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <img
                  src={el.image}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl">{el.name}</h1>
                <p className="text-[#808080]">{el.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCard;
