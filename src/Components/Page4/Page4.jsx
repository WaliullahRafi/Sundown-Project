import React from "react";
import "./Page4.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Page4() {
  return (
    <div className="page4">
      <div className="title">
        <div className="dot"></div>
        <h4>WHO WE WORK WITH</h4>
      </div>

      <div className="swiperContainer">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bottomSwiper">
              <div className="img-size">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg" />
              </div>
              <p>
                Our team works with our clients to refine an idea and concept
                into an executable design. We create a final design that
                encompasses the brand narrative to bring stories to life and
                provide end-to-end design solutions from concept, design, and
                architectural drawings to 3D renderings.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bottomSwiper">
              <div className="img-size">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg" />
              </div>
              <p>
                Our team works with our clients to refine an idea and concept
                into an executable design. We create a final design that
                encompasses the brand narrative to bring stories to life and
                provide end-to-end design solutions from concept, design, and
                architectural drawings to 3D renderings.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bottomSwiper">
              <div className="img-size">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg" />
              </div>
              <p>
                Our team works with our clients to refine an idea and concept
                into an executable design. We create a final design that
                encompasses the brand narrative to bring stories to life and
                provide end-to-end design solutions from concept, design, and
                architectural drawings to 3D renderings.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bottomSwiper">
              <div className="img-size">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg" />
              </div>
              <p>
                Our team works with our clients to refine an idea and concept
                into an executable design. We create a final design that
                encompasses the brand narrative to bring stories to life and
                provide end-to-end design solutions from concept, design, and
                architectural drawings to 3D renderings.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bottomSwiper">
              <div className="img-size">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg" />
              </div>
              <p>
                Our team works with our clients to refine an idea and concept
                into an executable design. We create a final design that
                encompasses the brand narrative to bring stories to life and
                provide end-to-end design solutions from concept, design, and
                architectural drawings to 3D renderings.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bottomSwiper">
              <div className="img-size">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg" />
              </div>
              <p>
                Our team works with our clients to refine an idea and concept
                into an executable design. We create a final design that
                encompasses the brand narrative to bring stories to life and
                provide end-to-end design solutions from concept, design, and
                architectural drawings to 3D renderings.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="bottomSwiper">
          <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg" />
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Page4;
