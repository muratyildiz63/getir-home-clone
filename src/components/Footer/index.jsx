import React from "react";
import MobileApp from "./MobileApp";
import Categories from "./Categories";
function Index() {
  return (
    <div className="bg-white pt-10">
      <div className="container flex flex-wrap px-4 px-md-0">
        <div className="w-full md:w-1/4">
          <MobileApp />
        </div>
        <div className="w-full md:w-1/2">
          <Categories />
        </div>
        <div className="w-full md:w-1/4 d-flex justify-end">
          <a
            href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1"
            target="_blank"
          >
            <figure
              shape="NORMAL"
              width="72px"
              height="84px"
              className="w-[104px] p-2 rounded shadow ml-auto"
              data-testid="wrapper"
            >
              <img
                data-testid="main-image"
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt="ETBIS"
                shape="NORMAL"
              />
            </figure>
          </a>
        </div>

        <div className="w-full py-6 border-t border-gray-100 mt-3 text-xs">
          <div className="">© 2024 Getir <span className="text-primary"> Bilgi Toplumu Hizmetleri</span></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
