import React from 'react';
import Title from "./Title"
const MobileApp = () => {
    return (
        <div className='w-full'>
         <Title>Getir'i İndir</Title>
         <div className="flex gap-5 flex-col">
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
    );
}

export default MobileApp;
