import { Button, Card, Flex, Layout, List } from "antd";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import empty from "../Assets/empty.json";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("selectedService");
    if (storedData) {
      // Parse the data
      const parsedData = JSON.parse(storedData);
      setCartItems(parsedData);
    }
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    // Update local storage
    localStorage.setItem("selectedService", JSON.stringify(updatedCartItems));
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <Layout>
      <Content style={{ padding: "5rem" }}>
        <motion.h1
          style={{
            marginBottom: "2rem",
            textAlign: "center",
            fontSize: "3.5rem",
            color: "rgb(65, 70, 64)",
            fontWeight: "bold",
            textDecoration: "underline",
            textDecorationColor: "#fca503",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Booking ...
        </motion.h1>
        <motion.p
          style={{
            textAlign: "center",
            color: "rgb(65, 70, 64)",
            fontSize: "1.2rem",
            marginBottom: "4rem",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          You have successfully booked the following items. Please take a moment
          to review your booking details:
        </motion.p>

        {cartItems.length > 0 ? (
          <List
            dataSource={cartItems}
            renderItem={(item: any, index: number) => (
              <List.Item>
                <motion.div
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ width: "100%" }}
                >
                  <Card
                    style={{
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginInline: "3rem",
                      }}
                    >
                      <div style={{ textAlign: "left" }}>
                        <p>
                          <strong>Name:</strong>{" "}
                          {item.facality ? item.facality.name : "N/A"}
                        </p>
                        <p>
                          <strong>Price:</strong> Rs{" "}
                          {item.facality ? item.facality.price : "N/A"}
                        </p>
                      </div>
                      <Flex align="center" gap={30}>
                        <div style={{ textAlign: "right" }}>
                          <p>
                            <strong>Date:</strong>{" "}
                            {item.formData ? item.formData.date : "N/A"}
                          </p>
                          <p>
                            <strong>Time:</strong>{" "}
                            {item.formData ? item.formData.timing : "N/A"}
                          </p>
                        </div>
                        <Button
                          type="primary"
                          danger
                          onClick={() => removeFromCart(index)}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </div>
                  </Card>
                </motion.div>
              </List.Item>
            )}
          />
        ) : (
          <div style={{ marginTop: "0rem", textAlign: "center" }}>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                
              }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Lottie
                style={{ width: "25vw", height: "20vw" }}
                animationData={empty}
                loop={true}
              />
              <p>No items in cart.</p>
              <Button
                type="primary"
                onClick={() => navigate("/all-services")}
                style={{
                  backgroundColor: "#fca503",
                  width: "13vw",
                  height: "5vh",
                }}
              >
                continue shopping
              </Button>
            </motion.div>
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default Cart;
