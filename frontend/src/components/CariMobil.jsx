import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Nav, Offcanvas, Row } from 'react-bootstrap';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import { FaUsers } from 'react-icons/fa';
import iconCalendar from '../assets/img/fi_calendar.png';
import iconSettings from '../assets/img/fi_settings.png';
import iconUser from '../assets/img/fi_users.png';
import imgIconFacebook from '../assets/img/icon_facebook.png';
import imgIconInstagram from '../assets/img/icon_instagram.png';
import imgIconMail from '../assets/img/icon_mail.png';
import imgIconTwitch from '../assets/img/icon_twitch.png';
import imgIconTwitter from '../assets/img/icon_twitter.png';
import imgMainSection from '../assets/img/main-section.png';

import '../assets/style.css';

const CariMobil = () => {
  // handle offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState('');
  const [typedriver, setTypedriver] = useState('');

  const getCars = async () => {
    const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
    console.log(response);
    setCars(response.data);
  };

  useEffect(() => {
    getCars();
  }, []);


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

      {/* form cari mobil */}
      <Container>
        <Row className="mx-auto">
          <Col>
            <Card className="card w-80 cari-mobil">
              <Card.Body>
                <Row className="align-items-lg-start">
                  <Col className="col-tipe-driver">
                    <h6 className="card-title">Tipe Driver</h6>
                    <select className="form-select" id="type" onChange={(e) => setTypedriver(e.target.value)}>
                      <option selected>Pilih Tipe Driver</option>
                      <option value="true">Dengan Kunci</option>
                      <option value="false">Lepas Kunci</option>
                    </select>
                  </Col>
                  <Col className="col-tanggal">
                    <h6 className="card-title">Tanggal</h6>
                    <Form.Control type="date" id="tanggal" placeholder="Pilih Tanggal" />
                  </Col>
                  <Col className="col-waktu-jemput">
                    <h6 className="card-title">Waktu Jemput/Ambil</h6>
                    <select className="form-select" id="waktu">
                      <option selected>Pilih Waktu</option>
                      <option value="1">08.00 WIB</option>
                      <option value="2">09.00 WIB</option>
                      <option value="3">10.00 WIB</option>
                      <option value="4">11.00 WIB</option>
                      <option value="5">12.00 WIB</option>
                    </select>
                  </Col>
                  <Col className="col-jumlah-penumpang">
                    <h6 className="card-title">Jumlah Penumpang</h6>
                    <Form.Control type="number" onChange={(e) => setQuery(e.target.value)} id="penumpang" placeholder="Jumlah Penumpang" />
                    <FaUsers className="icon-jumlah-penumpang" />
                  </Col>
                  <Col className="col-btn">
                    <Button variant="success">Cari Mobil</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* hasil cari mobil */}
      <Container fluid style={{ padding: '0px 10% 100px 10%' }}>
        <Row>
          {cars
            .filter((car) => {
              if (typedriver !== 'true') {
                return car.available === false;
              } else {
                return car.available === true;
              }
            })
            .filter((car) => car.capacity == query)
            .map((car) => (
              <Col>
                <Card className="mb-3" style={{ width: '333px', height: '586px' }}>
                  <Card.Img variant="top" src={car.image} style={{ objectFit: 'cover', width: '332px', height: '240px' }} />
                  <Card.Body>
                    <Card.Title>{car.manufacture}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> {car.rentPerDay} </Card.Subtitle>
                    <Card.Text>{car.description}</Card.Text>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <img src={iconUser} /> {car.capacity}
                      </li>
                      <li className="mb-3">
                        <img src={iconSettings} /> {car.transmission}
                      </li>
                      <li className="mb-3">
                        <img src={iconCalendar} /> {car.year}
                      </li>
                    </ul>
                    <Button variant="success">Sewa Mobil</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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

export default CariMobil;
