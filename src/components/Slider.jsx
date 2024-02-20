import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from "@react-hook/window-size";
function Sliders() {
  const onlyWidth = useWindowWidth();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  /* Buradaki ülke telefon kodlarını gerçeği yansıtılmamaktadır. rast gele yazılmıştır */
  const phones = {
    TR: "+90",
    US: "+7",
    GB: "+95",
    FR: "+48",
    DE: "+3",
    IT: "+78",
  };
  const [selected, setSelected] = useState("TR");
  return (
    <div className="w-full leading-none mb-3	 overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:to-transparent md:before:from-primary before:z-10">
      {onlyWidth>768 && (
        <Slider {...settings}>
          <div className="w-full">
            <img
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
              className="w-full h-[500px] object-cover"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
              className="w-full h-[500px] object-cover"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
              className="w-full h-[500px] object-cover"
              alt=""
            />
          </div>
        </Slider>
      )}
      <div className="md:absolute inset-0 z-10">
        <div className="w-full md:container h-full">
          <div className="w-full flex justify-between items-center h-full">
            <div className="hidden md:flex flex-col">
              <div>
                <img
                  src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                  alt=""
                />
              </div>
              <div className="text-white text-4xl font-semibold mt-5">
                Dakikalar içinde kapında
              </div>
            </div>

            <div className=" bg-gray-50 rounded-lg flex flex-col items-start justify-center w-full md:w-[400px] p-6">
              <span className="text-primary text-base font-semibold mb-3 text-center w-full">
                Giriş yap veya kayıt ol
              </span>
              <div className="flex phone-flags gap-2 w-full">
                <ReactFlagsSelect
                  countries={Object.keys(phones)}
                  customLabels={phones}
                  onSelect={(code) => setSelected(code)}
                  selected={selected}
                  className="text-sm bg-white"
                />
                <label htmlFor="phone" className="w-full block  relative">
                  <input
                    type="text"
                    id="phone"
                    required
                    className="px-3 w-full flex-1 text-sm h-14 outline-none  border-2 border-gray-200 focus:border-primary rounded peer"
                  />
                  <span className="text-sm absolute px-3 text-gray-500 cursor-text border-0 outline-none left-0 top-0 h-full peer-valid:h-5 peer-valid:text-primary peer-focus:text-xs  peer-focus:h-5 peer-focus:text-primary flex items-center transition-all">
                    Telefon Numarası
                  </span>
                </label>
              </div>
              <div className="mt-2 w-full">
                <button className="bg-yellow hover:bg-primary text-primary hover:text-yellow font-semibold text-sm h-12 w-full rounded-lg transition-all">
                  Telefon numarası ile devam et
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
