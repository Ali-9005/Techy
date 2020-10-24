import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from "../images/computer.png";

//images
import gaming from "../images/home/Gaming.png";
import business from "../images/home/Business.png";
import student from "../images/home/Student.png";
import "../css/Home.css";
import { Fade } from "react-reveal";

//carousel images
import image1 from "../images/carousel/image1.png";
import image2 from "../images/carousel/image2.png";
import image3 from "../images/carousel/image3.png";


export default function ControlledCarousel() {
  return (
    <Container>
      <div style={{ paddingTop: "50px" }} />

      <Fade>
        <Carousel id="carousel">
          <Carousel.Item>
            <img className="d-block w-100" alt="#" src={image1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="#" src={image2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="#" src={image3} />
          </Carousel.Item>
        </Carousel>
      </Fade>

      <div style={{ paddingTop: "500px" }} />
      <div className="laptops">
        <h1 id="laptops">Laptops</h1>
        <Fade>
          <div className="left">
            <img src={gaming} alt="gaming" />
            <h1>لابتوب العاب</h1>
            <p>
              لاب توبات الألعاب جيدة لأحتياجات المدرسة او احتياجات الالعاب ولكن
              اغلب لاب توبات الألعاب مو جيدة للسفر والأستخدام بشكل طويل بدون م
              تشحنها لأنه بسبب قوتها الكبيرة تستهلك طاقة كبيرة جدًا
            </p>
          </div>
        </Fade>

        <Fade>
          <div className="right">
            <img src={business} alt="business" />
            <h1>لابتوب بزنس</h1>
            <p>
              لاب توبات البزنس ممتازة في الأماكن العامة او مكان العمل بحيث ان
              عمر بطاريتها طويل وصوت المراوح ملائم وغير مزعج وذلك للحفاظ على
              بيئة هادئة
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="left">
            <img
              src={student}
              alt="student"
              style={{ transform: "scaleX(-1)" }}
            />
            <h1>لاب توب دراسة</h1>
            <p>
              لاب توبات الدراسة بالعادة الشركات المصنعة لهذي الفئة من اللاب
              توبات بالتحديد يركزون على اداء وعمر البطارية وبتلاقي اغلب اللاب
              توبات من هذي الفئة بتكون لاب توبات ثلتعش إنش ومناسبة جدًا للدراسة
            </p>
          </div>
        </Fade>
        <Link to="/shop">
        <Button variant="primary" style={{padding: "20px", fontSize: "30px", margin: "50px", fontFamily: "Tajawal"}}>متجر اللابتوبات</Button>
        </Link>
      </div>
    </Container>
  );
}
