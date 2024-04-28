import {
  Button,
  Card,
  Flex,
  Image,
  Layout,
  Modal,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;

function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const navigate = useNavigate();

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
        "https://media.istockphoto.com/id/851007946/photo/woman-getting-hair-shampooed-at-salon.jpg?s=612x612&w=0&k=20&c=1kRvk2iAy6rBdfrfeAz7fhqPz8pvY_dgKmq_fHmjmLU=",
      description:
        "Indulge in a pampering experience with our Women's Salon & Spa services. From trendy haircuts and vibrant hair coloring to rejuvenating spa treatments and relaxing massages, we offer a range of services tailored to enhance your beauty and well-being.",
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
        "https://t4.ftcdn.net/jpg/04/69/68/17/360_F_469681744_FZWt6LKXLoCU4XVv8Cjx6ZFmwNlNLm7x.jpg",
      description:
        "Discover the ultimate grooming experience with our Men's Salon & Massage services. From classic haircuts and precise beard trims to relaxing massages and facial treatments, we provide a haven for modern gentlemen seeking style and relaxation.",
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
        "https://us.123rf.com/450wm/fabrikacrimea/fabrikacrimea2007/fabrikacrimea200702511/152298221-young-black-man-repairman-checking-an-outside-air-conditioner-unit.jpg?ver=6",
      description:
        "Ensure optimal comfort and air quality in your home or office with our HVAC (Heating, Ventilation, and Air Conditioning) Services. From installation and repair to maintenance and indoor air quality solutions, we offer comprehensive HVAC services to meet your needs.",
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
      description:
        "Experience pristine cleanliness and hygiene with our House Cleaning services. Whether you need deep cleaning, regular maintenance, or specialized cleaning for specific areas, our professional cleaners are equipped to leave your home spotless and fresh.",
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
      description:
        "Protect your home or business from pests with our comprehensive Pest Control services. From general pest control and termite treatments to rodent and bed bug extermination, we employ effective solutions to ensure a pest-free environment.",
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
      description:
        "Experience the benefits of yoga during pregnancy with our PreNatal Yoga classes. Designed to promote physical and emotional well-being during pregnancy and prepare expectant mothers for childbirth, our classes offer gentle exercises, breathing techniques, and relaxation practices tailored to the needs of pregnant women.",
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

  const handleSeeAllServices = () => {
    navigate("/all-services");
  };

  const displayedServices = services.slice(0, 3);

  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <Flex justify="center" >
          <Image
            style={{ width: "100vw", height: "90vh" }}
            preview={false}
            alt="home services logo"
            src={"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww"}
          />
        </Flex>
        <Flex
          vertical
          justify="center"
          style={{
            marginTop: "4rem",
            marginBottom: "5rem",
            marginInline: "5rem",
            position: "absolute",
            top: "100%",
            left: "45%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            textAlign: "center",
            backgroundColor: "rgb(65 70 64 )",
            padding: "2rem",
          }}
          gap={10}
        >
          <Flex justify="space-between">
            <Text
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "Edu SA Beginner",
                textAlign: "left",
                color: "white",
              }}
            >
              Our Services
            </Text>
            <Button style={{borderColor:"hsl(45.7deg 94.38% 48.82%)", color:"hsl(45.7deg 94.38% 48.82%)", fontWeight:"bold"}} onClick={handleSeeAllServices}>SEE All SERVICES</Button>
          </Flex>
          <Flex>
            {displayedServices.map((service, index) => (
              <Card
                hoverable 
             onClick={() => openModal(service)}

                key={index}
                style={{
                  width: "20vw",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                cover={
                  <img
                    alt={service.name}
                    src={service.imageUrl}
                    style={{ width: "100", height: "10rem"  }}
                  />
                }
              >
                <Card.Meta
                  title={service.name}
                  description={service.description}
                />
              </Card>
            ))}
          </Flex>
        </Flex>

        <Flex vertical style={{ marginInline: "5rem", marginBottom: "5rem" }}>
          <Text
            style={{
              marginTop: "35rem",
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
              onClick={() => navigate("/about")}
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
