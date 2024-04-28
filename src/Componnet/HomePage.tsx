import {
  Button,
  Card,
  Flex,
  Image,
  Layout,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceModal from "./ServicesModel";

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
        {
          name: "Haircut and styling",
          services: [
            {
              name: "Haircut and styling",
              price: 599,
              imageUrl: "https://example.com/haircutandstyling.jpg",
            },
            {
              name: "Blow-dry: straight and smooth",
              price: 349,
              imageUrl: "https://example.com/blowdrystraight.jpg",
            },
            {
              name: "Blow-dry: in curl/out curl",
              price: 349,
              imageUrl: "https://example.com/blowdrycurl.jpg",
            },
            {
              name: "Straightening",
              price: 449,
              imageUrl: "https://example.com/straightening.jpg",
            },
          ],
        },
        {
          name: "Cut & Style",
          services: [
            {
              name: "Haircut",
              price: 499,
              imageUrl: "https://example.com/haircut.jpg",
            },
            {
              name: "Kid's haircut",
              price: 599,
              imageUrl: "https://example.com/kidshaircut.jpg",
            },
            {
              name: "Haircut & styling",
              price: 599,
              imageUrl: "https://example.com/haircutstyling.jpg",
            },
            {
              name: "Hair spa & cut",
              price: 1299,
              imageUrl: "https://example.com/hairspacut.jpg",
            },
          ],
        },
        {
          name: "Trim & Style",
          services: [
            {
              name: "Hair trim",
              price: 399,
              imageUrl: "https://example.com/hairtrim.jpg",
            },
            {
              name: "Hair trim & styling",
              price: 549,
              imageUrl: "https://example.com/hairtrimstyling.jpg",
            },
          ],
        },
        {
          name: "Professional makeup",
          services: [
            {
              name: "Basic makeup",
              price: 1459,
              imageUrl: "https://example.com/basicmakeup.jpg",
            },
            {
              name: "Luxe glam up makeup",
              price: 2999,
              imageUrl: "https://example.com/luxeglamup.jpg",
            },
            {
              name: "HD finish makeup",
              price: 2349,
              imageUrl: "https://example.com/hdfinishmakeup.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Men's Salon & Massage",
      imageUrl:
        "https://t4.ftcdn.net/jpg/04/69/68/17/360_F_469681744_FZWt6LKXLoCU4XVv8Cjx6ZFmwNlNLm7x.jpg",
      description:
        "Discover the ultimate grooming experience with our Men's Salon & Massage services. From classic haircuts and precise beard trims to relaxing massages and facial treatments, we provide a haven for modern gentlemen seeking style and relaxation.",
      facilities: [
        {
          name: "Haircut and beard styling",
          services: [
            { name: "Haircut for men", price: 199 },
            { name: "Haircut for boys", price: 199 },
            { name: "Clean shave", price: 179 },
            { name: "Beard trimming and styling", price: 179 },
          ],
        },
        {
          name: "Detan",
          services: [
            { name: "Face and neck detan", price: 329 },
            { name: "Hand detan pack", price: 329 },
          ],
        },
        {
          name: "Facial & cleanup",
          services: [
            { name: "Skin brightening facial", price: 1199 },
            { name: "Skin hydrating facial", price: 1199 },
            { name: "Charcoal de-toxifying cleanup", price: 559 },
          ],
        },
        {
          name: "Hair color",
          services: [
            { name: "Biotique hair color", price: 499 },
            { name: "Garnier hair color", price: 219 },
            { name: "L'oreal matrix hair color", price: 399 },
            { name: "Godrej hair color", price: 219 },
          ],
        },
        {
          name: "Massage",
          services: [
            { name: "Head massage", price: 89 },
            { name: "40 mins head, neck & shoulder massage", price: 209 },
            { name: "15 mins face hydrating massage", price: 129 },
          ],
        },
      ],
    },
    {
      name: "HVAC Services",
      imageUrl:
        "https://us.123rf.com/450wm/fabrikacrimea/fabrikacrimea2007/fabrikacrimea200702511/152298221-young-black-man-repairman-checking-an-outside-air-conditioner-unit.jpg?ver=6",
      description:
        "Ensure optimal comfort and air quality in your home or office with our HVAC (Heating, Ventilation, and Air Conditioning) Services. From installation and repair to maintenance and indoor air quality solutions, we offer comprehensive HVAC services to meet your needs.",
      facilities: [
        {
          name: "A/c service",
          services: [
            {
              name: "Basic",
              price: 399,
              imageUrl: "https://example.com/acservicebasic.jpg",
            },
            {
              name: "Deep clean service",
              price: 749,
              imageUrl: "https://example.com/acservicedeepclean.jpg",
            },
            {
              name: "Gas leak fix and Refill",
              price: 2399,
              imageUrl: "https://example.com/acservicegasleak.jpg",
            },
            {
              name: "A/c install/uninstall",
              price: 599,
              imageUrl: "https://example.com/acserviceinstall.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "House Cleaning",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg",
      description:
        "Experience pristine cleanliness and hygiene with our House Cleaning services. Whether you need deep cleaning, regular maintenance, or specialized cleaning for specific areas, our professional cleaners are equipped to leave your home spotless and fresh.",
      facilities: [
        {
          name: "Classic Cleaning",
          services: [
            {
              name: "1 bhk occupied",
              price: 2799,
              imageUrl: "https://example.com/classiccleaning1bhkoccupied.jpg",
            },
            {
              name: "1 bhk vacant",
              price: 2499,
              imageUrl: "https://example.com/classiccleaning1bhkvacant.jpg",
            },
            {
              name: "2 bhk occupied",
              price: 3299,
              imageUrl: "https://example.com/classiccleaning2bhkoccupied.jpg",
            },
            {
              name: "2 bhk vacant",
              price: 2899,
              imageUrl: "https://example.com/classiccleaning2bhkvacant.jpg",
            },
            {
              name: "3 bhk occupied",
              price: 4299,
              imageUrl: "https://example.com/classiccleaning3bhkoccupied.jpg",
            },
            {
              name: "3 bhk vacant",
              price: 3799,
              imageUrl: "https://example.com/classiccleaning3bhkvacant.jpg",
            },
            {
              name: "4 bhk occupied",
              price: 4999,
              imageUrl: "https://example.com/classiccleaning4bhkoccupied.jpg",
            },
            {
              name: "4 bhk vacant",
              price: 4499,
              imageUrl: "https://example.com/classiccleaning4bhkvacant.jpg",
            },
          ],
        },
        {
          name: "Deep Cleaning",
          services: [
            {
              name: "1 bhk occupied",
              price: 5299,
              imageUrl: "https://example.com/deepcleaning1bhkoccupied.jpg",
            },
            {
              name: "1 bhk vacant",
              price: 4299,
              imageUrl: "https://example.com/deepcleaning1bhkvacant.jpg",
            },
            {
              name: "2 bhk occupied",
              price: 6299,
              imageUrl: "https://example.com/deepcleaning2bhkoccupied.jpg",
            },
            {
              name: "2 bhk vacant",
              price: 4599,
              imageUrl: "https://example.com/deepcleaning2bhkvacant.jpg",
            },
            {
              name: "3 bhk occupied",
              price: 7299,
              imageUrl: "https://example.com/deepcleaning3bhkoccupied.jpg",
            },
            {
              name: "3 bhk vacant",
              price: 5599,
              imageUrl: "https://example.com/deepcleaning3bhkvacant.jpg",
            },
            {
              name: "4 bhk occupied",
              price: 8199,
              imageUrl: "https://example.com/deepcleaning4bhkoccupied.jpg",
            },
            {
              name: "4 bhk vacant",
              price: 6599,
              imageUrl: "https://example.com/deepcleaning4bhkvacant.jpg",
            },
          ],
        },
        {
          name: "Bathroom Cleaning",
          services: [
            {
              name: "Classic cleaning - 1 bathroom",
              price: 399,
              imageUrl: "https://example.com/bathroomcleaning1.jpg",
            },
            {
              name: "Deep cleaning – 1 bathroom",
              price: 499,
              imageUrl: "https://example.com/bathroomcleaning2.jpg",
            },
            {
              name: "Classic cleaning - 2 bathrooms",
              price: 749,
              imageUrl: "https://example.com/bathroomcleaning3.jpg",
            },
            {
              name: "Deep cleaning – 2 bathrooms",
              price: 899,
              imageUrl: "https://example.com/bathroomcleaning4.jpg",
            },
            {
              name: "Classic cleaning - 3 bathrooms",
              price: 999,
              imageUrl: "https://example.com/bathroomcleaning5.jpg",
            },
            {
              name: "Deep cleaning – 3 bathrooms",
              price: 1299,
              imageUrl: "https://example.com/bathroomcleaning6.jpg",
            },
          ],
        },
        {
          name: "Kitchen Cleaning",
          services: [
            {
              name: "Classic cleaning",
              price: 999,
              imageUrl: "https://example.com/kitchencleaning1.jpg",
            },
            {
              name: "Deep cleaning",
              price: 1699,
              imageUrl: "https://example.com/kitchencleaning2.jpg",
            },
          ],
        },
        // Add other facilities and services here
      ],
    },
    {
      name: "Pest Control",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png",
      description:
        "Protect your home or business from pests with our comprehensive Pest Control services. From general pest control and termite treatments to rodent and bed bug extermination, we employ effective solutions to ensure a pest-free environment.",
      facilities: [
        {
          name: "General pest control (cockroaches, Ants)",
          services: [
            {
              name: "Apartment 1bhk",
              price: 449,
              imageUrl: "https://example.com/generalpestcontrol1bhk.jpg",
            },
            {
              name: "Apartment 2bhk",
              price: 549,
              imageUrl: "https://example.com/generalpestcontrol2bhk.jpg",
            },
            {
              name: "Apartment 3bhk",
              price: 649,
              imageUrl: "https://example.com/generalpestcontrol3bhk.jpg",
            },
          ],
        },
        {
          name: "Terminate control",
          services: [
            {
              name: "1bhk",
              price: 3699,
              imageUrl: "https://example.com/terminatecontrol1bhk.jpg",
            },
            {
              name: "2bhk",
              price: 4599,
              imageUrl: "https://example.com/terminatecontrol2bhk.jpg",
            },
            {
              name: "3bhk",
              price: 5499,
              imageUrl: "https://example.com/terminatecontrol3bhk.jpg",
            },
          ],
        },
        // Add other pest control services here
      ],
    },
    {
      name: "PreNatal Yoga",
      imageUrl:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg",
      description:
        "Experience the benefits of yoga during pregnancy with our PreNatal Yoga classes. Designed to promote physical and emotional well-being during pregnancy and prepare expectant mothers for childbirth, our classes offer gentle exercises, breathing techniques, and relaxation practices tailored to the needs of pregnant women.",
      facilities: [
        {
          name: "Online Sessions",
          services: [
            { name: "15 sessions (1 month)", price: 4499 },
            { name: "45 sessions (3 months)", price: 13199 },
            { name: "135 sessions (9 months)", price: 38499 },
          ],
        },
        {
          name: "At Home (Personal Training)",
          services: [
            { name: "15 sessions (1 month)", price: 6999 },
            { name: "45 sessions (3 months)", price: 20699 },
            { name: "135 sessions (9 months)", price: 60999 },
          ],
        },
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
        <Flex justify="center">
          <Image
            style={{ width: "100vw", height: "90vh" }}
            preview={false}
            alt="home services logo"
            src={
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww"
            }
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
            <Button
              style={{
                borderColor: "hsl(45.7deg 94.38% 48.82%)",
                color: "hsl(45.7deg 94.38% 48.82%)",
                fontWeight: "bold",
              }}
              onClick={handleSeeAllServices}
            >
              SEE All SERVICES
            </Button>
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
                    style={{ width: "100", height: "10rem" }}
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
        <ServiceModal
          selectedService={selectedService}
          modalVisible={modalVisible}
          closeModal={closeModal}
        />
      </Content>
    </Layout>
  );
}

export default HomePage;
