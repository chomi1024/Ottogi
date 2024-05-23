import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

SwiperCore.use([Pagination]);

export default function SwiperSlide1() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          type: "fraction",
          el: ".swiper-pagination",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          height: "610px",
        }}
        navigation={{
          nextEl: ".swiper1-button-next",
          prevEl: ".swiper1-button-prev",
        }}
      >
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-1.jpg?alt=media&token=045d9afe-1e97-444e-8448-f95721a016b1)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-2.jpg?alt=media&token=e70b66ee-045e-40ea-bc4c-beb1a70c0989)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-3.jpg?alt=media&token=c9d78d05-fa27-4904-920a-7da9df1f7979)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-4.jpg?alt=media&token=f1d32615-0dfb-484f-8476-71533f3f7ecd)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-5.jpg?alt=media&token=bdbbeea9-ce60-4b6e-8b38-1b4a7c4dd802)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-6.jpg?alt=media&token=abd2bfe1-ba8a-4bbe-9735-f1bf96db7300)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-7.jpg?alt=media&token=4e8897e8-3508-43f3-9814-89125ce99b3f)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-8.jpg?alt=media&token=b8282b70-acd6-49f6-b7ff-d3aa544935df)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-9.jpg?alt=media&token=ad506deb-9153-41e5-a598-3213cf20570d)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-10.jpg?alt=media&token=9ff68ef5-32c3-4c08-be74-3e13f9cbaa2a)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-11.jpg?alt=media&token=83b11a6c-f8cd-4f5b-b0f4-0b8baa3f7d3c)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-12.jpg?alt=media&token=4838777c-a251-4ea2-bb35-3b0eeee803d5)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-13.jpg?alt=media&token=4da52f6f-5fa5-44e8-afa5-ba3d6a89ffc8)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-14.jpg?alt=media&token=f4531afd-ef2c-47d8-bbca-fd516b672038)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a
              style={{
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-15.jpg?alt=media&token=8b75826e-b32f-4e01-9639-e1a8547b6acc)no-repeat center center;",
                display: "block",
                height: "100%",
              }}
            />
          </Link>
        </SwiperSlide>

        <div
          className="buttons"
          style={{
            position: "absolute",
            display: "flex",
            bottom: "100px",
            zIndex: "999",
            top: "50%",
            width: "100%",
            height: "60px",
            transform: "translate(0,-50%)",
          }}
        >
          <span
            className="swiper1-button-prev"
            style={{
              position: "absolute",
              background:
                "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-button-left.svg?alt=media&token=f0552e6e-2015-4b36-b00f-2b837f69eee5)no-repeat center center",
              width: "60px",
              height: "100%",
            }}
          />
          <span
            className="swiper1-button-next"
            style={{
              position: "absolute",
              right: "0px",
              background:
                "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-button-right.svg?alt=media&token=13c3b63c-f72d-4060-84ef-61f9ac485b52)no-repeat center center",
              width: "60px",
              height: "100%",
            }}
          />
        </div>

        <div
          className="swiper-pagination"
          style={{
            position: "absolute",
            zIndex: 1000,
            bottom: "25px",
            left: "calc(50% + 705px)",
            margin: "0 2px 0 10px",
            padding: "10px 15px 10px 20px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "inline-flex",
            fontSize: "14px",
            borderRadius: "50px 0 0 50px",
          }}
        >
          <span
            className="swiper-pagination-current"
            style={{
              padding: "0 5px 0 0",
            }}
          ></span>
          <span className="swiper-pagination-total" style={{}}></span>
        </div>
      </Swiper>
    </>
  );
}
