import {
  Button,
  Card,
  Carousel,
  Flex,
  Image,
  Layout,
  Modal,
  Space,
  Typography,
} from "antd";
import { useState } from "react";

const { Content } = Layout;
const { Title, Text } = Typography;

function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  // Function to handle opening the modal
  const openModal = (service: any) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  const services = [
    {
      name: "Women's Salon & Spa",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg",
      facilities: [
        "Haircut",
        "Hair Coloring",
        "Hair Styling",
        "Manicure",
        "Pedicure",
        "Facial",
        "Massage",
        "Spa Treatments",
        "Waxing",
      ],
    },
    {
      name: "Men's Salon & Massage",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg",
      facilities: [
        "Haircut",
        "Beard Trim",
        "Shave",
        "Massage",
        "Facial",
        "Waxing",
        "Hair Coloring",
        "Hair Styling",
      ],
    },
    {
      name: "HVAC Services",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg",
      facilities: [
        "AC Installation",
        "AC Repair",
        "Heating Services",
        "Ventilation Services",
        "Indoor Air Quality Solutions",
      ],
    },
    {
      name: "House Cleaning",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg",
      facilities: [
        "Deep Cleaning",
        "Regular Cleaning",
        "Kitchen Cleaning",
        "Bathroom Cleaning",
        "Window Cleaning",
        "Carpet Cleaning",
        "Upholstery Cleaning",
      ],
    },
    {
      name: "Pest Control",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png",
      facilities: [
        "General Pest Control",
        "Termite Control",
        "Rodent Control",
        "Bed Bug Control",
        "Mosquito Control",
        "Cockroach Control",
      ],
    },
    {
      name: "PreNatal Yoga",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg",
      facilities: [
        "Pre-natal Yoga",
        "Post-natal Yoga",
        "Parent-child Yoga",
        "Yoga for Moms",
        "Yoga for Dads",
        "Yoga for Kids",
      ],
    },
  ];

  const offers = [
    {
      id: 1,
      title: "3-Month Subscription",
      subTitle: "Rs. 150",
      buttonText: "Subscribe Now",
    },
    {
      id: 2,
      title: "6-Month Subscription",
      subTitle: "Rs. 225",
      buttonText: "Subscribe Now",
    },
    {
      id: 3,
      title: "1-Year Subscription",
      subTitle: "Rs. 350",
      buttonText: "Subscribe Now",
    },
  ];

  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <Flex vertical style={{ height: "80vh" }}>
          <Carousel dotPosition="bottom" autoplay>
            <div>
              <div style={{ position: "relative" }}>
                <Image
                  style={{ height: "80vh", width: "100vw" }}
                  preview={false}
                  src="https://www.manmachinesolutions.com/wp-content/uploads/2014/08/DSC8558.jpg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#fff",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                <Image
                  style={{ height: "80vh", width: "100vw" }}
                  preview={false}
                  src={"BeautySpa.jpg"}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#fff",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                <Image
                  style={{ height: "80vh", width: "100vw" }}
                  preview={false}
                  src={"HomePainting.jpg"}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#fff",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                <Image
                  style={{ height: "80vh", width: "100vw" }}
                  preview={false}
                  src={"HouseCleaning.jpg"}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#fff",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </div>
          </Carousel>
        </Flex>
        <Flex
          vertical
          justify="center"
          style={{
            marginTop: "4rem",
            marginBottom: "5rem",
            marginInline: "5rem",
          }}
          gap={10}
        >
          <Text
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "Edu SA Beginner",
              textAlign: "left",
            }}
          >
            Our Services
          </Text>
          <Flex>
            {services.map((service, index) => (
              <Card
                onClick={() => openModal(service)}
                key={index}
                style={{ width: "20vw" }}
              >
                <Flex
                  justify="center"
                  style={{
                    backgroundColor: "rgba(245, 245, 245, 1.00)",
                    height: "80%",
                  }}
                >
                  <Image
                    preview={false}
                    style={{ width: "8rem" }}
                    src={service.imageUrl}
                  />
                </Flex>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: "1rem",
                    fontFamily: "Edu SA Beginner",
                    fontWeight: "bold",
                  }}
                >
                  {service.name}
                </Text>
              </Card>
            ))}
          </Flex>
        </Flex>

        <Flex vertical style={{ marginInline: "5rem", marginBottom: "5rem" }}>
          <Text
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "left",
              fontFamily: "Edu SA Beginner",
              marginBottom: "1rem",
            }}
          >
            Subscription
          </Text>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div style={{ overflowX: "auto", msOverflowStyle: "none" }}>
              <Flex align="start" justify="flex-start" gap={10}>
                {offers.map((offer, index) => (
                  <Card
                    style={{
                      width: "32.8%",
                      height: "29vh",
                      border: "1px solid #d9d9d9",
                      flex: "0 0 auto",
                      boxSizing: "border-box",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      backgroundColor: "#F0F8FF",
                    }}
                    key={index}
                  >
                    <Flex
                      vertical
                      align="start"
                      justify="space-between"
                      style={{ height: "25vh" }}
                    >
                      <Space direction="vertical" align="start">
                        <Title
                          level={2}
                          style={{
                            textAlign: "left",
                            margin: 0,
                            fontFamily: "Edu SA Beginner",
                            fontWeight: "bold",
                          }}
                        >
                          {offer.title}
                        </Title>
                        <Title
                          level={4}
                          style={{
                            textAlign: "left",
                            margin: 2,
                            fontFamily: "Edu SA Beginner",
                          }}
                        >
                          {offer.subTitle}
                        </Title>
                      </Space>
                      <Button
                        style={{
                          marginTop: "2rem",
                          backgroundColor: "#B2FFB2",
                          color: "#006400",
                        }}
                      >
                        {offer.buttonText}
                      </Button>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </div>
            <style>
              {`
      ::-webkit-scrollbar {
        width: 1px;
        display: none;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `}
            </style>
          </div>
        </Flex>

        <Flex style={{ marginBottom: "8rem", position: "relative" }}>
          <Image
            preview={false}
            style={{ width: "100vw", height: "85vh" }}
            src="https://wallpapercave.com/wp/wp4085230.jpg"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "black",
              zIndex: 1,
              backgroundColor: "white",
              opacity: 0.8,
              padding: "2rem",
            }}
          >
            <h1 style={{ fontFamily: "Edu SA Beginner", fontSize: "3rem" }}>
              About Us
            </h1>
            <p style={{ fontFamily: "Edu SA Beginner", fontSize: "1.5rem" }}>
              KWIKSERVE was born from a vision to empower local artisans and
              skilled workers in urban areas. Faced with fierce competition and
              limited branding, we set out to hire, train, and transform these
              talented individuals. We provided them with the tools, skills, and
              knowledge to thrive in the competitive market, turning their small
              businesses into efficient, customer-focused enterprises. text
            </p>
            <Button
              style={{
                backgroundColor: "#FFB6C1", // Background color
                color: "white", // Text color
                fontFamily: "Edu SA Beginner",
                borderRadius: "5px", // Border radius
                width: "8rem",
                cursor: "pointer", // Cursor on hover
                fontSize: "1.5rem", // Font size
                marginTop: "1rem",
                height: "3rem",
                borderColor: "#FFB6C1",
              }}
            >
              Explore
            </Button>
          </div>
        </Flex>
        <Modal
          title={`${
            selectedService ? selectedService.name + " Facilities" : ""
          }`}
          open={modalVisible}
          onCancel={closeModal}
          footer={null}
        >
          {/* Display facilities of the selected service */}
          {selectedService &&
            selectedService.facilities.map(
              (facility: string, index: number) => <p key={index}>{facility}</p>
            )}
        </Modal>
      </Content>
    </Layout>
  );
}

export default HomePage;
