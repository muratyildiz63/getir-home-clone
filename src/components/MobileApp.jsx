import React from "react";

function MobileApp() {
  return (
    <div className="bg-primary bg-mobile-app h-[312px] xl:h-[400px] container rounded-lg mb-5 relative bg-repeat bg-cover text-white flex justify-between">
      <div className="flex flex-col md:w-1/2 p-5 md:ms-7 justify-center">
        <div className="text-2xl font-bold mb-2">Getir'i indir!</div>
        <p className="font-bold">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <div className="flex mt-8 gap-2 flex-col md:flex-row">
          <a>
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
          <a>
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
          <a>
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="justify-end items-end hidden md:flex">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
      </div>
    </div>
  );
}

export default MobileApp;
