import { Button, Flex, Input, Image } from "antd";
import { EnvironmentOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";

function HomePageNavBar() {
  return (
    <Flex align="center" justify="space-between">
      <Flex ><Image preview={false} style={{width:"4rem"}}  alt="logo" src={"HomeServicesLogo.jpg"} /></Flex>
      <Flex >
        <Flex align="center" justify="space-between" style={{width:"20vw", borderRadius:"0.5rem", border:"1px solid #d9d9d9",margin:"0.5rem", height:"3rem", padding:"0.5rem"}}>
          <Flex gap={2} >
            <EnvironmentOutlined />
            Chandigarh, India
          </Flex>
          <DownOutlined />
        </Flex>
        <Flex style={{width:"20vw", borderRadius:"0.5rem",margin:"0.5rem", height:"3rem", }}>< Input prefix={<SearchOutlined /> }allowClear placeholder="Search for..."/></Flex>
      </Flex>
      <Flex>
      <Button style={{height:"3rem", margin:"0.5rem", fontSize:"1rem" , width:"7rem", fontWeight:"bold"}}>About Us</Button>
        
        <Button style={{height:"3rem", margin:"0.5rem", fontSize:"1rem" , width:"7rem", fontWeight:"bold"}}>Login</Button>
      </Flex>
    </Flex>
  );
}

export default HomePageNavBar;
