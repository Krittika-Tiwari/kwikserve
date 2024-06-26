import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Card, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import Lottie from "lottie-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";
import cat from "../Assets/cat.json";

const SubscriptionPayment = () => {
  const { id } = useParams();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);

  const subscriptionData = [
    {
      type: "3-Month Subscription",
      price: 149,

      services: [
        "All services (cleaning, pest control, HVAC, and beauty salon)",
        "10% discount on additional services",
        "Flexible scheduling",
        "Priority booking",
      ],
    },
    {
      type: "	6-Month Subscription",
      price: 249,

      services: [
        "All services (cleaning, pest control, HVAC, and beauty salon)",
        "15% discount on additional services",
        "Flexible scheduling",
        "Priority booking",
        "Book 2 consecutive services and get the third one free (only applicable in cleaning and beauty salon services)",
      ],
    },
    {
      type: "12-Month Subscription",
      price: 399,

      services: [
        "All services (cleaning, pest control, HVAC, and beauty salon)",
        "15% discount on additional services",
        "Flexible scheduling",
        "Priority booking",
        "Book 2 consecutive services and get the third one free (only applicable in cleaning and beauty salon services)",
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

  const ids = parseInt(id || "0", 10);
  const subscription = subscriptionData[ids];

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await loginWithRedirect();
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <Content>
      <Flex
        style={{
          marginTop: "6rem",
          marginInline: "10rem",
          marginBottom: "5rem",
        }}
      >
        <Flex
          vertical
          justify="center"
          align="center"
          style={{ width: "50%", marginRight: "1rem" }}
        >
          {subscription && (
            <Flex
              vertical
              justify="space-between"
              style={{
                width: "100%",
                height: "100%",
                padding: "2rem",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
              }}
            >
              <Flex vertical style={{ height: "100%" }}>
                <h3
                  style={{
                    marginBottom: "1rem",
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    color: "#333",
                    textDecoration: "underline",
                    textDecorationColor: "#fca503",
                  }}
                >
                  {subscription.type}
                </h3>
                {/* <h3>3 Months Plans</h3> */}

                <ul style={{ listStyle: "none", paddingInlineStart: "0" }}>
                  {subscription.services.map((service: any, index) => (
                    <li style={{ marginBottom: "0.5rem" }} key={index}>
                      <Flex>
                      <CheckCircleOutlined
                        style={{
                          marginRight: "0.6rem",
                          fontSize: "1rem",
                          color: "#fca503",
                        }}
                      />
                      <div>{service}</div>{" "}
                      </Flex>
                      {/* {service.sessionsPerMonth && (
                        <span>
                          (Sessions per month: {service.sessionsPerMonth})
                        </span>
                      )}{" "}
                      {service.price && <span>(Price: ₹{service.price})</span>} */}
                    </li>
                  ))}
                </ul>

                {/* <p
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#666",
                  }}
                >
                  Discount: {subscription.discount}
                </p> */}
              </Flex>
              <Card
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Flex
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem 1rem",
                    background: "#f0f0f0",
                    borderRadius: "0.5rem",
                  }}
                >
                  <span style={{ color: "#333" }}>{subscription.type}</span>
                  <span style={{ marginLeft: "1rem", color: "#333" }}>
                    Rs: {subscription.price}
                  </span>
                </Flex>
              </Card>
            </Flex>
          )}
        </Flex>

        <Flex
          justify="center"
          style={{
            width: "50%",
            marginLeft: "1rem",
            background: "#f9f9f9",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
          }}
        >
          {!isAuthenticated ? (
            <div>
              <Lottie
                style={{ width: "25vw", height: "20vw" }}
                animationData={cat}
                loop={true}
              />
              <h3>Please log in to continue.</h3>
              <Button
                type="primary"
                onClick={handleLogin}
                style={{ backgroundColor: "#fca503", width: "10vw" }}
                loading={isLoading}
              >
                Log In
              </Button>
            </div>
          ) : (
            <Button type="primary">Proceed to Payment</Button>
          )}
        </Flex>
      </Flex>
    </Content>
  );
};

export default SubscriptionPayment;
