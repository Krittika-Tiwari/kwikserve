import { CheckCircleOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Row, Typography } from "antd";
import "./Subscription.css";


const { Title, Paragraph } = Typography;

const Subscription = () => {
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

  return (
    <Row
      style={{
        marginTop: "5rem",
        marginBottom: "10rem",
        marginInline: "15rem",
      }}
      gutter={[16, 16]}
    >
      <Col span={24}>
        <Flex
          vertical
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <Title
            level={1}
            style={{ color: "rgb(65, 70, 64)", fontWeight: "bold", textDecoration: "underline", textDecorationColor: "#fca503" }}
          >
            Subscription Plans
          </Title>
          <Paragraph style={{ color: "rgb(65, 70, 64)", fontSize: "1.2rem" }}>
            Choose from our subscription plans tailored to meet your needs.
          </Paragraph>
        </Flex>
      </Col>
      {subscriptionData.map((subscription, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
          <Flex
            vertical
            style={{
              textAlign: "left",
              height: "100%",
            }}
          >
            <Card
              className="subscription-card"
              hoverable
              key={index}
              title={subscription.type}
              bordered
              
            >
              <Flex vertical style={{ paddingInline: "1rem" }}>
                <p>
                  <Flex gap={5} align="center">
                    <h3>PRICE : </h3> ₹{subscription.price} (
                    {subscription.discount} discount)
                  </Flex>
                </p>
                <ul style={{ listStyle: "none", paddingInlineStart: "0" }}>
                  {subscription.services.map((service: any, index) => (
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
                  ))}
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
          </Flex>
        </Col>
      ))}
    </Row>
  );
};

export default Subscription;
