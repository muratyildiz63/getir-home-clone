import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import apiBanners from "api/banners.json";
import Title from "./Title";
import { MdKeyboardArrowRight , MdKeyboardArrowLeft    } from "react-icons/md";
function SampleNextArrow({onClick}) {
  return <button onClick={onClick} className="absolute -left-6 top-1/2 -translate-y-1/2"><MdKeyboardArrowLeft size={22}/></button>;
}

function SamplePrevArrow({onClick}) {
  return <button onClick={onClick} className="absolute -right-6 top-1/2 translate-y-1/2"><MdKeyboardArrowRight size={22}/></button>;
}

function Campaigns() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows:false,
    
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows:false
       
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false
        }
      }
    ]
  };

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    setCampaigns(apiBanners);
  }, []);

  return (
    <div className="container  overflow-x-hidden">
      <Title className="px-2 mt-2 hidden md:block">Kampanyalar</Title>
      <Slider {...settings}>
        {campaigns &&
          campaigns.map((item) => {
            return (
              <div className="w-full md:px-2" key={item.id}>
                <picture className="">
                  <img
                    src={item.image}
                    className="w-full md:rounded object-cover"
                    alt=""
                  />
                </picture>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Campaigns;
