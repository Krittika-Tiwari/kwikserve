import { Card, Col, Flex, Image, Layout, Row, Space, Typography } from "antd";
import React from "react";
import HomePageNavBar from "./HomePageNavBar";
import { StarOutlined , UsergroupAddOutlined} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function HomePage() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white",paddingInline:"100px" }}>
        <HomePageNavBar />
      </Header>
      <Content  style={{ paddingInline: "100px", backgroundColor: "white", }}>
        <Flex style={{ margin: "1rem" }}>
          <Flex vertical style={{ width: "50%" }}>
            <Flex style={{ width: "70%", textAlign: "left" }}>
              <Title level={1}>"Instant Solution, endless saticfaction"</Title>
            </Flex>
            <Flex vertical>
              <Card style={{ width: "80%", textAlign: "left" }}>
                <Flex>
                  <Title style={{ color: "rgba(84, 84, 84, 1.00)" }} level={3}>
                    What are you looking for{" "}
                  </Title>
                </Flex>

                <Flex vertical gap={10}>
                  <Row gutter={[10, 10]}>
                    <Col span={8}>
                      <Card>
                        <Flex
                          justify="center"
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1.00)",
                          }}
                        >
                          <Image
                            style={{ width: "4rem" }}
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                          />
                        </Flex>
                        <Text style={{ textAlign: "right" }}>
                          Women's Salon & Spa
                        </Text>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <Flex
                          justify="center"
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1.00)",
                          }}
                        >
                          <Image
                            style={{ width: "4rem" }}
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg"
                          />
                        </Flex>
                        <Text style={{ textAlign: "right" }}>
                          Men's Salon & Massage
                        </Text>
                      </Card>{" "}
                    </Col>
                    <Col span={8}>
                      <Card>
                        <Flex
                          justify="center"
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1.00)",
                          }}
                        >
                          <Image
                            style={{ width: "4rem" }}
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg"
                          />
                        </Flex>
                        <Text style={{ textAlign: "right" }}>
                          HVAC Services
                        </Text>
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={[10, 10]}>
                    <Col span={8}>
                      <Card>
                        <Flex
                          justify="center"
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1.00)",
                          }}
                        >
                          <Image
                            style={{ width: "4rem" }}
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg"
                          />
                        </Flex>
                        <Text style={{ textAlign: "right" }}>
                          House Cleaning
                        </Text>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <Flex
                          justify="center"
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1.00)",
                          }}
                        >
                          <Image
                            style={{ width: "4rem" }}
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png"
                          />
                        </Flex>
                        <Text style={{ textAlign: "right" }}>Pest Control</Text>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <Flex
                          justify="center"
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1.00)",
                          }}
                        >
                          <Image
                            style={{ width: "4rem" }}
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg"
                          />
                        </Flex>
                        <Text style={{ textAlign: "right" }}>
                          Parental Yoga
                        </Text>
                      </Card>
                    </Col>
                  </Row>
                </Flex>
              </Card>
              <Flex gap={10} style={{ margin: "2rem" }}>
                <Flex align="center" style={{ width: "35%",textAlign:"left"  }}>
                  <Space style={{width:"25%",}}>
                    <StarOutlined style={{ fontSize: "2.5rem" }} />
                  </Space>
                  <Space direction="vertical">
                    <Space >
                      <Title style={{margin:0}} level={3}>4.8</Title>
                    </Space>
                    <Space>
                      <Text style={{margin:0}}>Service Raiting</Text>
                    </Space>
                  </Space>
                </Flex>
                <Flex align="center" style={{ width: "35%",textAlign:"left" }}>
                  <Space style={{width:"25%",}}>
                    <UsergroupAddOutlined  style={{ fontSize: "2.5rem" }} />
                  </Space>
                  <Space direction="vertical">
                    <Space >
                      <Title style={{margin:0}} level={3}>5M+</Title>
                    </Space>
                    <Space>
                      <Text style={{margin:0}}>Customer Globally</Text>
                    </Space>
                  </Space>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex style={{ width: "50%" }}>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
              alt="Responsive"
            />
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
}

export default HomePage;
