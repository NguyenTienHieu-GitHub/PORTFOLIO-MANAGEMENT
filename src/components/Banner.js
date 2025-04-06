import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/Banner.css"; // Import file CSS tùy chỉnh

const Banner = () => {
  return (
    <Carousel controls={false} indicators={false}>
      {" "}
      {/* Tắt controls và indicators nếu không cần */}
      <Carousel.Item>
        <div className="banner-slide">
          <div className="banner-left  justify-content-center align-items-center">
            <div className="banner-content">
              <h2>Maximize returns</h2>
              <h2 className="emphasized">Minimize risk</h2>
              <h2>Let your money grow with our expert portfolio guidance</h2>
            </div>
          </div>
          <div className="banner-right">
            <img
              className="d-block w-100 banner-image"
              style={{ height: "550px" }} // Đặt chiều cao của hình ảnh
              src="https://bcp.cdnchinhphu.vn/Uploaded/hoangtrongdien/2021_09_16/thanh-pho-thu-duc-tp-ho-chi-minh-41120.jpg" // Đảm bảo đường dẫn này đúng
              alt="Thành phố Hồ Chí Minh"
            />
            <div className="banner-left-bottom-overlay"></div>
            <div className="banner-left-top-overlay"></div>
          </div>
        </div>
      </Carousel.Item>
      {/* Bạn có thể thêm các Carousel.Item khác nếu cần */}
    </Carousel>
  );
};

export default Banner;
