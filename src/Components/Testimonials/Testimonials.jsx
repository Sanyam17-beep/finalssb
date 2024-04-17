import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import im1 from "../../im1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";
import "./style.css";
import alo from "../../alo.jpg";
import ARYA from "../../ARYA.jpg";
import sak from "../../shaksham.jpg";
import ary from "../../aryaman.mp4";
import saks from "../../shaksham.mp4";
import shlok from "../../shlok.mp4";
// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">What Our Students Say</div>
      <div className="testimonial-carousal">
        <Swiper
        // slidesPerView={2}
        // centeredSlides={true}
          grabCursor={true}
          loop={true}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides:true
            },
          
           800: {
              slidesPerView: 2,
              spaceBetween: 30,
              // centeredSlides:true
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[ Pagination]}
          className="mySwiper"
        >
          <SwiperSlide >
            <div className="tempbox">
              <div className="img-container">
                <img src={ARYA} width={55} height={55} alt="" />
                <div className="stars">
                  <svg
                    width="143"
                    height="19"
                    viewBox="0 0 143 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                      fill="#FFCB11"
                    />
                  </svg>
                </div>
              </div>
              <div className="tempbox-name">Aryaman Bhatt</div>
              <div className="tempbox-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                at illum nam totam explicabo. Iste, architecto illum voluptate
                sequi rem aspernatur repudiandae doloribus expedita ratione
                tempore dignissimos id minima deserunt fugiat! Cumque voluptate
                ab corporis, repudiandae placeat doloremque, ullam velit magnam
                id unde provident illum animi consequuntur exercitationem
                facere! Libero! lorem50
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="tempbox">
              <div className="img-container">
                <img src={sak} width={55} height={55} alt="" />
                <div className="stars">
                  <svg
                    width="143"
                    height="19"
                    viewBox="0 0 143 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                      fill="#FFCB11"
                    />
                  </svg>
                </div>
              </div>
              <div className="tempbox-name">Shaksham Kumar</div>
              <div className="tempbox-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                at illum nam totam explicabo. Iste, architecto illum voluptate
                sequi rem aspernatur repudiandae doloribus expedita ratione
                tempore dignissimos id minima deserunt fugiat! Cumque voluptate
                ab corporis, repudiandae placeat doloremque, ullam velit magnam
                id unde provident illum animi consequuntur exercitationem
                facere! Libero! lorem50
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="tempbox">
              <div className="img-container">
                <img src={alo} width={55} height={55} alt="" />
                <div className="stars">
                  <svg
                    width="143"
                    height="19"
                    viewBox="0 0 143 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                      fill="#FFCB11"
                    />
                  </svg>
                </div>
              </div>
              <div className="tempbox-name">Shlok</div>
              <div className="tempbox-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                at illum nam totam explicabo. Iste, architecto illum voluptate
                sequi rem aspernatur repudiandae doloribus expedita ratione
                tempore dignissimos id minima deserunt fugiat! Cumque voluptate
                ab corporis, repudiandae placeat doloremque, ullam velit magnam
                id unde provident illum animi consequuntur exercitationem
                facere! Libero! lorem50
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tempbox">
              <div className="img-container">
                <img src={ARYA} width={55} height={55} alt="" />
                <div className="stars">
                  <svg
                    width="143"
                    height="19"
                    viewBox="0 0 143 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                      fill="#FFCB11"
                    />
                  </svg>
                </div>
              </div>
              <div className="tempbox-name">Aryaman Bhatt</div>
              <div className="tempbox-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                at illum nam totam explicabo. Iste, architecto illum voluptate
                sequi rem aspernatur repudiandae doloribus expedita ratione
                tempore dignissimos id minima deserunt fugiat! Cumque voluptate
                ab corporis, repudiandae placeat doloremque, ullam velit magnam
                id unde provident illum animi consequuntur exercitationem
                facere! Libero! lorem50
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="tempbox">
              <div className="img-container">
                <img src={sak} width={55} height={55} alt="" />
                <div className="stars">
                  <svg
                    width="143"
                    height="19"
                    viewBox="0 0 143 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                      fill="#FFCB11"
                    />
                  </svg>
                </div>
              </div>
              <div className="tempbox-name">Shaksham Kumar</div>
              <div className="tempbox-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                at illum nam totam explicabo. Iste, architecto illum voluptate
                sequi rem aspernatur repudiandae doloribus expedita ratione
                tempore dignissimos id minima deserunt fugiat! Cumque voluptate
                ab corporis, repudiandae placeat doloremque, ullam velit magnam
                id unde provident illum animi consequuntur exercitationem
                facere! Libero! lorem50
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="tempbox">
              <div className="img-container">
                <img src={alo} width={55} height={55} alt="" />
                <div className="stars">
                  <svg
                    width="143"
                    height="19"
                    viewBox="0 0 143 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                      fill="#FFCB11"
                    />
                    <path
                      d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                      fill="#FFCB11"
                    />
                  </svg>
                </div>
              </div>
              <div className="tempbox-name">Shlok</div>
              <div className="tempbox-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                at illum nam totam explicabo. Iste, architecto illum voluptate
                sequi rem aspernatur repudiandae doloribus expedita ratione
                tempore dignissimos id minima deserunt fugiat! Cumque voluptate
                ab corporis, repudiandae placeat doloremque, ullam velit magnam
                id unde provident illum animi consequuntur exercitationem
                facere! Libero! lorem50
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
