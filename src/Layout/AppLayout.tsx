import { Layout, Spin, Image, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import HomePageNavBar from "../Componnet/HomePageNavBar";
import { Link, Outlet } from "react-router-dom";

const { Header, Footer } = Layout;

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spin style={{ color: "green" }} size="large" />
          <Image
            style={{ marginTop: "10px" }}
            width={150}
            preview={false}
            src={"HomeServicesLogo.jpg"}
          />
          <Spin size="large" />
        </div>
      ) : (
        <Layout>
          <Header style={{ backgroundColor: "white", paddingInline: "100px" }}>
            <HomePageNavBar />
          </Header>
          <Outlet />
          <Footer style={{ backgroundColor: "#f5fcf2", }}>
            <Row gutter={[16, 16]} justify="space-around" align="middle">
              <Col xs={24} sm={24} md={6} lg={4}>
                <img
                  src={"HomeServicesLogo.jpg"}
                  alt="Urban Company Logo"
                  style={{ maxWidth: "10rem", height: "auto" }}
                />
              </Col>

              <Col xs={24} sm={24} md={8} lg={6}>
                <div>
                  <h3>About Us</h3>
                  <p>
                    <Link to="#">How it Works</Link>
                  </p>
                  <p>
                    <Link to="#">Team</Link>
                  </p>
                  <p>
                    <Link to="#">Careers</Link>
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={6}>
                <div>
                  <h3>Services</h3>
                  <p>
                    <Link to="#">Home Cleaning</Link>
                  </p>
                  <p>
                    <Link to="services#">Salon at Home</Link>
                  </p>
                  <p>
                    <Link to="#">Pest Control</Link>
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={6}>
                <div>
                  <h3>Contact Us</h3>
                  <p>Email: contact@urbancompany.com</p>
                  <p>Phone: +1 123 456 7890</p>
                  <p>Address: 123 Street, City, Country</p>
                </div>
              </Col>
            </Row>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p>© 2024 Kiwikserve Company. All rights reserved.</p>
            </div>
          </Footer>
        </Layout>
      )}
    </Layout>
  );
}

export default AppLayout;
