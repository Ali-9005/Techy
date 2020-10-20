import React from "react";
import {
  Container,
  Carousel,
  Card,
  CardColumns,
  Button,
} from "react-bootstrap";
// import Logo from "../images/computer.png";

//images
import gaming from "../images/home/Gaming.png";
import business from "../images/home/Business.png";
import student from "../images/home/Student.png";
import "../css/Home.css";
import { Flip, Fade, Zoom } from "react-reveal";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init({
//   easing: "ease-out-back",
//   anchorPlacement: "top-center",
//   offset: 400,
//   duration: 1000,
// });

export default function ControlledCarousel() {
  return (
    <Container>
      <div style={{ paddingTop: "50px" }} />

      {/* <div class="top">
        <h1>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="laptop-code"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="svg-inline--fa fa-laptop-code fa-w-20 fa-2x"
          >
            <path
              fill="currentColor"
              d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
              class=""
            ></path>
          </svg>{" "}
          مرحبًا بِك يا صديغي في موغع علي الفضلي
        </h1>
      </div> */}
      <Fade>
        <Carousel id="carousel">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://blocksmc.com/images/slider/22.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://blocksmc.com/images/slider/22.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blocksmc.com/images/slider/22.png"
              alt="Third slide"
            />
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
      </div>

      <div className="shop">
        <h1 id="shopText">Shop</h1>

        <div className="shopLaptops">
          <div className="Business">
            <h1>البزنس</h1>

            <div className="laptopInformation">
              <CardColumns>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer
                        style={{ textAlign: "center" }}
                        id="triggerBusiness"
                      >
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer style={{ textAlign: "center" }}>
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer style={{ textAlign: "center" }}>
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
              </CardColumns>
            </div>
          </div>

          <div className="Gaming">
            <h1>الألعاب</h1>
            <div className="laptopInformation">
              <CardColumns>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer
                        style={{ textAlign: "center" }}
                        id="triggerBusiness"
                      >
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer style={{ textAlign: "center" }}>
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer style={{ textAlign: "center" }}>
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
              </CardColumns>
            </div>
          </div>

          <div className="Student">
            <h1>الطالب</h1>

            <div className="laptopInformation">
              <CardColumns>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer
                        style={{ textAlign: "center" }}
                        id="triggerBusiness"
                      >
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer style={{ textAlign: "center" }}>
                        <Button variant="success">شراء</Button>{" "}
                        <Button variant="success">المزيد من المعلومات</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
                <Flip bottom cascade>
                  <Card style={{ padding: "20px" }}>
                    <Card.Img variant="top" src={student} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        سامسونق
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#42526e",
                          fontFamily: "Tajawal",
                          textAlign: "center",
                        }}
                      >
                        لاب توب جميل جدًا بمواصفات عالية
                      </Card.Text>
                      <footer style={{ textAlign: "center" }}>
                        <Button variant="success">شراء</Button>{" "}
                      </footer>
                    </Card.Body>
                  </Card>
                </Flip>
              </CardColumns>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
