import { Button, Card, Flex, Image, Layout, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceModal from "./ServicesModel";
import { CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const { Content } = Layout;
const { Text } = Typography;

function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const navigate = useNavigate();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();

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
      key: 1,
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
      key: 2,
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
      key: 3,
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
      key: 4,
      name: "House Cleaning",
      imageUrl:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8zMl9pbWFnZV9vZl95b3VuZ19zbWlsaW5nX3dvbWFuX2luX2dsb3Zlc19jbGVhbl8xNDUwZTcyYS04ODcyLTRmYzktOTUxOC01ZWRmYzkyY2ViZmVfMS5qcGc.jpg",

      description:
        "Experience pristine cleanliness and hygiene with our House Cleaning services. Whether you need deep cleaning, regular maintenance, or specialized cleaning for specific areas, our professional cleaners are equipped to leave your home spotless and fresh.",
      facilities: [
        {
          name: "Classic Cleaning",
          includes: [
            "Machine cleaning of floor",
            "Cleaning of windows, window panes, window channels, and grills",
            "Cleaning of balconies",
            "Cleaning of washrooms",
            "Cleaning of kitchen",
            "Cleaning of cabinets and wardrobes externally",
            "Cleaning of fans, tubes, switchboard, bulbs, door handles",
          ],

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
          includes: [
            "Machine cleaning of floor",
            "Cleaning of windows, window panes, window channels, and grills",
            "Cleaning of balconies",
            "Deep cleaning of washrooms",
            "Deep cleaning of kitchen",
            "Cleaning of cabinets and wardrobes externally",
            "Cleaning of fans, tubes, switchboard, bulbs, door handles",
            "Fridge, Microwave, and Chimney exterior cleaning",
            "Dry vacuuming of sofa, carpet, curtains, mattress",
          ],

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
      key: 5,
      name: "Pest Control",
      imageUrl:
        "https://media.istockphoto.com/id/1066978818/photo/exterminator-working.jpg?s=612x612&w=0&k=20&c=sddrtDtVPnyn8jIukuNcyCQS0gm6I4GwQQ_CGvs9UYM=",
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
    // {
    //   key: 6,
    //   name: "PreNatal Yoga",
    //   imageUrl:
    //     "https://static.wixstatic.com/media/e1f7f0_99d7a7988fa2423fa527e81bff8d7c74~mv2.jpg/v1/fill/w_2500,h_1666,al_c/e1f7f0_99d7a7988fa2423fa527e81bff8d7c74~mv2.jpg",
    //   description:
    //     "Experience the benefits of yoga during pregnancy with our PreNatal Yoga classes. Designed to promote physical and emotional well-being during pregnancy and prepare expectant mothers for childbirth, our classes offer gentle exercises, breathing techniques, and relaxation practices tailored to the needs of pregnant women.",
    //   facilities: [
    //     {
    //       name: "Online Sessions",
    //       services: [
    //         { name: "15 sessions (1 month)", price: 4499 },
    //         { name: "45 sessions (3 months)", price: 13199 },
    //         { name: "135 sessions (9 months)", price: 38499 },
    //       ],
    //     },
    //     {
    //       name: "At Home (Personal Training)",
    //       services: [
    //         { name: "15 sessions (1 month)", price: 6999 },
    //         { name: "45 sessions (3 months)", price: 20699 },
    //         { name: "135 sessions (9 months)", price: 60999 },
    //       ],
    //     },
    //   ],
    // },
  ];

  const subscriptionData = [
    {
      type: "Men's Hair and Grooming",
      price: 4860,
      discount: "10%",
      services: [
        { name: "Haircut and Beard Styling", sessionsPerMonth: 3 },
        { name: "Detan", sessionsPerMonth: 2 },
        { name: "Facial & Cleanup", sessionsPerMonth: 2 },
        { name: "Hair Color", sessionsPerMonth: 2 },
        { name: "Massage", sessionsPerMonth: 7 },
      ],
    },
    {
      type: "Women's Hair and Makeup Enhanced",
      price: 5940,
      discount: "10%",
      services: [
        { name: "Cut & Style", sessionsPerMonth: 4 },
        { name: "Trim & Style", sessionsPerMonth: 4 },
        { name: "Professional Makeup", sessionsPerMonth: 4 },
      ],
    },
    {
      type: "Classic Cleaning",
      price: 5400,
      discount: "10%",
      services: [
        { name: "1 BHK Occupied", price: 2519 },
        { name: "1 BHK Vacant", price: 2249 },
        { name: "2 BHK Occupied", price: 2969 },
        { name: "2 BHK Vacant", price: 2609 },
        { name: "3 BHK Occupied", price: 3869 },
        { name: "3 BHK Vacant", price: 3419 },
        { name: "4 BHK Occupied", price: 4499 },
        { name: "4 BHK Vacant", price: 4049 },
      ],
    },
    {
      type: "Bathroom Cleaning Subscription",
      price: 1350,
      discount: "10%",
      services: [
        { name: "Classic Cleaning for 1 Bathroom", price: 359 },
        { name: "Deep Cleaning for 1 Bathroom", price: 449 },
        { name: "Classic Cleaning for 2 Bathrooms", price: 674 },
        { name: "Deep Cleaning for 2 Bathrooms", price: 809 },
        { name: "Classic Cleaning for 3 Bathrooms", price: 899 },
        { name: "Deep Cleaning for 3 Bathrooms", price: 1169 },
      ],
    },
    {
      type: "Kitchen Cleaning Subscription",
      price: 2025,
      discount: "10%",
      services: [
        { name: "Classic Cleaning", price: 899 },
        { name: "Deep Cleaning", price: 1529 },
      ],
    },
  ];

  const handleSeeAllServices = () => {
    navigate("/all-services");
  };

  const handleSeeAllSubscription = () => {
    navigate("/all-subscriptions");
  };

  const handelSubscriptionPayment = (id: number) => {
    navigate(`/subscriptionPayment/${id}`);
  };

  const displayedServices = services.slice(0, 3);
  const displayedOffer = subscriptionData.slice(0, 3);

  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <div ref={ref1}>
          {/* Animated div */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 2 }}
          >
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
          </motion.div>
        </div>

        <div ref={ref2}>
          {/* Another animated div */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={inView2 ? { opacity: 1 } : { opacity: 0.5 }}
            transition={{ duration: 5, delay: 0.2 }}
          >
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
                padding: "3rem",
              }}
              gap={10}
            >
              <Flex align="center" justify="space-between">
                <Text
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    textDecorationColor: "#fca503",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  OUR SERVICES
                </Text>
                <Button
                  style={{
                    borderRadius: 0,
                    borderColor: "#fca503",
                    color: "#fca503",
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
                      borderRadius: 0,
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
          </motion.div>
        </div>

        <div ref={ref3}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 5 }}
          >
            <Flex vertical style={{ marginTop: "33rem" }}>
              <Image
                preview={false}
                style={{
                  position: "absolute",
                  top: "calc(10rem)", // Adjust the position as needed
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  padding: "2rem",
                  height: "80vh",
                  width: "70vw",
                }}
                src="https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176724.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714176000&semt=ais"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(95rem)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  padding: "1rem",
                  backgroundColor: "rgb(65 ,70, 64 , 0.8)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    zIndex: 2,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  KWIKSERVE is a unique home services firm that is devoted to
                  changing the way urban families receive care and convenience.
                  Personalised service, dependability, and superior standards
                  are our guiding principles. We enable our knowledgeable staff
                  with technology and training. We stand out for our openness,
                  environmentally responsible actions, and dedication to meeting
                  client needs. Locals are less likely to be unemployed in
                  cities like Bangalore when we hire and train them. In addition
                  to improving your experience, your involvement with KWIKSERVE
                  supports our aim of empowering communities and bringing about
                  positive change.
                </p>
              </div>

              <Flex
                justify="center"
                style={{
                  backgroundColor: "#ebedea",
                  height: "90vh",
                }}
              >
                <Flex vertical>
                  <h2
                    style={{
                      fontSize: "3rem",
                      marginInlineStart: 0,
                      marginInlineEnd: 0,
                      marginBlockEnd: 0,
                      marginBlockStart: 0,
                      marginTop: "2rem",
                    }}
                  >
                    WHY CHOOSE US
                  </h2>
                  <Text style={{ fontSize: "1rem" }}>
                    The Boutique For Your Home & Business. Your One Stop Shop
                    Where You Come First.
                  </Text>
                </Flex>
              </Flex>

              <Flex
                style={{
                  backgroundColor: "#414640",
                  height: "120vh",
                }}
              >
                r
              </Flex>
              <Flex
                vertical
                justify="center"
                style={{
                  position: "absolute",
                  top: "calc(125rem)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  padding: "2rem",
                  height: "70vh",
                  width: "70vw",
                }}
                gap={10}
              >
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ margin: "1rem" }}
                >
                  <Text
                    style={{
                      fontSize: "3rem",
                      textDecoration: "underline",
                      textDecorationColor: "#fca503",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    SUBSCRIPTION
                  </Text>
                  <Button
                    style={{
                      borderRadius: 0,
                      borderColor: "#fca503",
                      color: "#fca503",
                      fontWeight: "bold",
                    }}
                    onClick={handleSeeAllSubscription}
                  >
                    SEE All SUBSCRIPTION
                  </Button>
                </Flex>
                <Flex style={{ textAlign: "left" }}>
                  {displayedOffer.map((subscription: any, index) => (
                    <Card
                      hoverable
                      key={index}
                      title={subscription.type}
                      onClick={() => handelSubscriptionPayment(index)}
                      style={{
                        width: "30vw",
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                        borderRadius: 0,
                        height: "100%",
                      }}
                    >
                      <Flex vertical style={{ paddingInline: "1rem" }}>
                        <h3>3 Months Plans</h3>
                        <p>
                          <Flex gap={5} align="center">
                            <h3>PRICE : </h3> ₹{subscription.price} (
                            {subscription.discount} discount)
                          </Flex>
                        </p>
                        <ul
                          style={{ listStyle: "none", paddingInlineStart: "0" }}
                        >
                          {subscription.services.map(
                            (service: any, index: any) => (
                              <li key={index}>
                                <CheckCircleOutlined
                                  style={{
                                    marginRight: "0.6rem",
                                    fontSize: "1rem",
                                    color: "#fcbe03",
                                  }}
                                />{" "}
                                {service.name}{" "}
                                {service.sessionsPerMonth &&
                                  `(Sessions per month: ${service.sessionsPerMonth})`}{" "}
                                {service.price && `(Price: ₹${service.price})`}
                              </li>
                            )
                          )}
                        </ul>
                      </Flex>
                      {/* <Button
                    style={{
                      marginTop: "auto",
                      borderRadius: 0,
                      backgroundColor: "#bbe691",
                      borderColor: "#86c41b",
                      fontWeight: "bold",
                    }}
                  >
                    Buy Now
                  </Button> */}
                    </Card>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </motion.div>
        </div>
        <div ref={ref5}>
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={inView5 ? { opacity: 1 } : { opacity: 0.5 }}
            transition={{ duration: 3,  }}
          >
            <Flex style={{ backgroundColor: "#ebedea", textAlign: "left" }}>
              <Flex style={{ width: "60%" }}>
                <Image
                  preview={false}
                  style={{ width: "100%", height: "85vh" }}
                  src={"services.jpg"}
                />
              </Flex>
              <Flex style={{ width: "40%", padding: "2rem" }}>
                <div
                  style={
                    {
                      // position: "absolute",
                      // top: "50%",
                      // left: "50%",
                      // transform: "translate(-50%, -50%)",
                      // textAlign: "center",
                      // color: "black",
                      // zIndex: 1,
                      // backgroundColor: "white",
                      // opacity: 0.8,
                      // padding: "2rem",
                    }
                  }
                >
                  <h1
                    style={{
                      fontSize: "3rem",
                      textDecoration: "underline",
                      textDecorationColor: "#fca503",
                    }}
                  >
                    ABOUT US
                  </h1>
                  <p style={{ fontSize: "1.2rem" }}>
                    KWIKSERVE was born from a vision to empower local artisans
                    and skilled workers in urban areas. Faced with fierce
                    competition and limited branding, we set out to hire, train,
                    and transform these talented individuals. We provided them
                    with the tools, skills, and knowledge to thrive in the
                    competitive market, turning their small businesses into
                    efficient, customer-focused enterprises. text
                  </p>
                  <Button
                    style={{
                      backgroundColor: "#fca503", // Background color
                      color: "white", // Text color

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
            </Flex>
          </motion.div>
        </div>
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
