import { Layout, Spin, Image, Col, Row, Divider } from "antd";
import React, { useState, useEffect } from "react";
import HomePageNavBar from "../Componnet/HomePageNavBar";
import { Link, Outlet } from "react-router-dom";
import {
  EnvironmentFilled,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
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
          <Header
            style={{
              backgroundColor: isScrolled
                ? "rgba(0, 0, 0, 0.8)"
                : "transparent",

              position: "fixed",
              width: "100%",
              zIndex: 1000,
              transition: "background-color 0.3s ease",
            }}
          >
            <HomePageNavBar />
          </Header>
          <Content>
            <Outlet />
          </Content>

          <Footer style={{ backgroundColor: "#414640" }}>
            <Row gutter={[16, 16]} justify="space-around" align="top">
              <Col xs={24} sm={24} md={6} lg={4}>
                <img
                  src={"HomeServicesLogo.jpg"}
                  alt="Urban Company Logo"
                  style={{ maxWidth: "10rem", height: "auto" }}
                />
              </Col>

              <Col xs={24} sm={24} md={8} lg={6}>
                <div style={{ textAlign: "left", color: "white" }}>
                  <h3>About Us</h3>
                  <p>How it Works</p>
                  <p>Team</p>
                  <p>Careers</p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={6}>
                <div style={{ textAlign: "left", color: "white" }}>
                  <h3>Services</h3>
                  <p>Women's Salon & Spa</p>
                  <p>Men's Salon & Massage</p>
                  <p>HVAC Services</p>
                  <p>House Cleaning</p>
                  <p>Pest Control </p>
                  <p>PreNatal Yoga </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={6}>
                <div style={{ textAlign: "left", color: "white" }}>
                  <h3>Contact Us</h3>
                  <p>
                    <MailFilled style={{ color: "#fca503" }} />{" "}
                    Kiwikserve8@gmail.com
                  </p>
                  <p>
                    <PhoneFilled style={{ color: "#fca503" }} /> +91 123 456
                    7890
                  </p>
                  <p>
                    <EnvironmentFilled style={{ color: "#fca503" }} /> Bangalore
                    Karnataka,India
                  </p>
                </div>
              </Col>
            </Row>
            <Divider style={{ backgroundColor: "white" }} />
            <div
              style={{ textAlign: "center", marginTop: "20px", color: "white" }}
            >
              {/* <p>Connect with us:</p> */}
              <Link to="https://www.facebook.com/profile.php">
                <FacebookOutlined
                  style={{
                    fontSize: "24px",
                    color: "white",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link to="https://www.youtube.com/@kwikserve">
                <YoutubeFilled
                  style={{
                    fontSize: "24px",
                    color: "white",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link to="https://www.instagram.com/kwikserv">
                <InstagramOutlined
                  style={{
                    fontSize: "24px",
                    color: "white",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/kwikserve-173456294/recent-activity/all/"
              >
                <LinkedinFilled
                  style={{
                    fontSize: "24px",
                    color: "white",
                    marginRight: "10px",
                  }}
                />
              </Link>
              
           
            </div>
            <div
              style={{ textAlign: "center", marginTop: "20px", color: "white" }}
            >
              <p>© 2024 Kiwikserve Company. All rights reserved.</p>
            </div>
          </Footer>
        </Layout>
      )}
      <style>
        {`
              ::-webkit-scrollbar {
                width: 5px; /* Make the scrollbar wider */
                height: 5px;
              }

              ::-webkit-scrollbar-track {
                background: #f1f1f1;
              }

              ::-webkit-scrollbar-thumb {
                background: #bada55;

                border-radius: 5px;
              }

              ::-webkit-scrollbar-thumb:hover {
                background: #003300;
              }
            `}
      </style>
    </Layout>
  );
}

export default AppLayout;
