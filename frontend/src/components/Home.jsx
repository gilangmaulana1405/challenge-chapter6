// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Accordion, Button, Col, Container, Nav, Offcanvas, Row } from 'react-bootstrap';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';

import { FaStar } from 'react-icons/fa';

import imgIcon24hrs from '../assets/img/icon_24hrs.png';
import imgIconComplete from '../assets/img/icon_complete.png';
import imgIconFacebook from '../assets/img/icon_facebook.png';
import imgIconInstagram from '../assets/img/icon_instagram.png';
import imgIconMail from '../assets/img/icon_mail.png';
import imgIconPrice from '../assets/img/icon_price.png';
import imgIconProfessional from '../assets/img/icon_professional.png';
import imgIconTwitch from '../assets/img/icon_twitch.png';
import imgIconTwitter from '../assets/img/icon_twitter.png';
import imgMainSection from '../assets/img/main-section.png';
import imgOurService from '../assets/img/our-service.png';
import imgTestimonial1 from '../assets/img/testimonial1.png';
import imgTestimonial2 from '../assets/img/testimonial2.png';

import '../assets/style.css';

const Home = () => {
  // handle offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* navbar */}
      <Nav className="navbar navbar-expand-lg navbar-light">
        <Container>
          <a className="navbar-brand" href="#home">
            <div className="brand"></div>
          </a>

          <Button className="navbar-toggler" type="button" onClick={handleShow} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#ourservice">
                  Our Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>

      {/* offcanvas */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#ourservice">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#whyus">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-success" href="#">
                Register
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* main section */}
      <header className="main-section">
        <Container>
          <Row>
            <Col md={7} className="text-main-section">
              <h1 className="fw-bold mt-5">
                Sewa & Rental Mobil Terbaik di Kawasan{' '}
                <a href="https://goo.gl/maps/XNMzVTkV5tVSJKWa9" style={{ textDecoration: 'none', color: 'black' }}>
                  Karawang
                </a>
              </h1>
              <p className="fs-5 mt-5 text-description">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <div className="button-hero mb-5">
                  {/* <a href="/cars" className="btn btn-success">
                    Mulai Sewa Mobil{' '}
                  </a> */}
                  <Button variant="success" href="/cars">
                    Mulai Sewa Mobil
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={5} className="mobile-main-section">
              <div className="main-section-bg-img">
                <div className="bg-color-main-section">
                  <img src={imgMainSection} className="img-fluid img-main-section float-start mt-5" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* our service */}
      <Container className="mt-5">
        <Row className="mt-4 our-service">
          <Col md={6}>
            <img src={imgOurService} alt="" />
          </Col>
          <Col className="mt-5" md={6}>
            <h2>
              Best Car Rental for any kind of trip in
              <a href="https://goo.gl/maps/XNMzVTkV5tVSJKWa9" style={{ textDecoration: 'none', color: 'black' }}>
                Karawang
              </a>
            </h2>
            <p>
              Sewa mobil di
              <a href="https://goo.gl/maps/XNMzVTkV5tVSJKWa9" style={{ textDecoration: 'none', color: 'black' }}>
                lokasimu
              </a>{' '}
              bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul>
              <li className="li-our-service">Sewa Mobil Dengan Supir di Bali 12 Jam.</li>
              <li className="li-our-service">Sewa Mobil Lepas Kunci di Bali 24 Jam.</li>
              <li className="li-our-service">Sewa Mobil Jangka Panjang Bulanan.</li>
              <li className="li-our-service">Gratis Antar - Jemput Mobil di Bandara.</li>
              <li className="li-our-service">Layanan Airport Transfer / Drop In Out</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* why us */}
      <Container className="container">
        <Row className="px-3">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="col-sm-3 mt-3">
            <div className="card">
              <div className="card-body">
                <img src={imgIconComplete} width="32" height="32" className="mb-2" />
                <h6 className="card-title mb-3">Mobil Lengkap</h6>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mt-3">
            <div className="card">
              <div className="card-body">
                <img src={imgIconPrice} width="32" height="32" className="mb-2" />
                <h6 className="card-title mb-3">Harga Murah</h6>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mt-3">
            <div className="card">
              <div className="card-body">
                <img src={imgIcon24hrs} width="32" height="32" className="mb-2" />
                <h6 className="card-title mb-3">Layanan 24 Jam</h6>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mt-3">
            <div className="card">
              <div className="card-body">
                <img src={imgIconProfessional} width="32" height="32" className="mb-2" />
                <h6 className="card-title mb-3">Sopir Profesional</h6>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      {/* testimonial */}
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <div className="testimonial-heading text-center">
              <h2>Testimonial</h2>
              <p>Berbagai review positif dari para pelanggan kami.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <OwlCarousel className="owl-theme" items="3" autoplay nav dots loop>
              <div className="item">
                <div className="card-testimonial row">
                  <div className="col-lg-3 col-12">
                    <img className="img-testimonial" src={imgTestimonial2} alt="" />
                  </div>
                  <div className="col-9 mt-5 rating-description">
                    <div className="star">
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p>
                      <b>John Dee 32, Bromo</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card-testimonial row">
                  <div className="col-lg-3 col-12">
                    <img className="img-testimonial" src={imgTestimonial1} alt="" />
                  </div>
                  <div className="col-9 mt-5 rating-description">
                    <div className="star">
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p>
                      <b>John Dee 32, Bromo</b>
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>

      {/* banner */}
      <Container className="mt-5">
        <Row className="text-center">
          <Col md={8}>
            <div className="banner">
              <h1 className="banner-heading">
                Sewa Mobil di{' '}
                <a href="https://goo.gl/maps/XNMzVTkV5tVSJKWa9" style={{ textDecoration: 'none', color: 'white' }}>
                  Karawang
                </a>{' '}
                Sekarang
              </h1>
              <p className="banner-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className="btn btn-success btn-lg mt-3 mt-0">Mulai Sewa Mobil</button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* faq */}
      <Container>
        <Row className="text-center mt-5">
          <Col md={6}>
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>

          <Col md={6}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Apa saja syarat yang dibutuhkan? </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Container>
        <Row className="mt-5">
          <Col md={3}>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col md={3} className="footer-list">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </Col>
          <Col>
            <p>Connect with us</p>
            <img src={imgIconFacebook} width="32" height="32" alt="" />
            <img src={imgIconInstagram} width="32" height="32" alt="" />
            <img src={imgIconTwitter} width="32" height="32" alt="" />
            <img src={imgIconMail} width="32" height="32" alt="" />
            <img src={imgIconTwitch} width="32" height="32" alt="" />
          </Col>
          <Col md={3}>
            <p>Copyright Binar 2022</p>
            <div className="brand"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
