import { Button, Flex, Input, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePageNavBar() {
  const navigate = useNavigate();
  return (
    <Flex align="center" justify="space-between">
      <Flex
        gap={10}
        align="end"
        style={{
          fontFamily: "Edu SA Beginner",
          fontWeight: "bold",
          color: "green",
          fontSize: "1.5rem",
        }}
        onClick={() => navigate("/")}
      >
        <Image
          preview={false}
          style={{ width: "3rem" }}
          alt="logo"
          src={"HomeServicesLogo.jpg"}
        />{" "}
        Kwikserve
      </Flex>

      <Flex>
        <Flex
          style={{
            width: "20vw",
            borderRadius: "0.5rem",
            margin: "0.5rem",
            height: "2.5rem",
          }}
        >
          <Input
            prefix={<SearchOutlined />}
            allowClear
            placeholder="Search for..."
          />
        </Flex>
        <Button

          style={{
            height: "2.5rem",
            margin: "0.5rem",
            fontSize: "1rem",
            width: "7rem",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/all-services")}
        >
         All Services
        </Button>
        <Button
          style={{
            height: "2.5rem",
            margin: "0.5rem",
            fontSize: "1rem",
            width: "7rem",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/about")}
        >
          About Us
        </Button>

        <Button
          style={{
            height: "2.5rem",
            margin: "0.5rem",
            fontSize: "1rem",
            width: "7rem",
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}

export default HomePageNavBar;
