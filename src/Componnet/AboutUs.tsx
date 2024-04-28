import { Flex, Image, Layout, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import React from "react";

const { Content } = Layout;
const { Title, Text } = Typography;
function AboutUs() {
  return (
    <Layout>
      <Content>
        <Flex vertical style={{ marginInline: "5rem", marginTop: "5rem" }}>
          <Title
            level={3}
            style={{
              fontFamily: "Edu SA Beginner",
              fontWeight: "bold",
              color: "green",
              fontSize: "2rem",
              marginInline: "5rem",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            Collaboration with 'HICARE'
          </Title>
          <Flex justify="center" align="start">
            <Image
              style={{ width: "20vw" }}
              preview={false}
              src="https://kwikserve.weebly.com/uploads/1/4/7/3/147314381/published/screenshot-2023-11-22-030549.png?1700844895"
            />
            <Flex
              style={{
                width: "60vw",
                fontFamily: "Edu SA Beginner",
                fontSize: "1.5rem",
                textAlign: "left",
                paddingInline: "2rem",
              }}
            >
              Many homeowners struggle with the dual challenges of maintaining a
              clean living environment and dealing with persistent pest
              problems. Traditional approaches often involve hiring separate
              services for house cleaning and pest control, leading to
              coordination issues, increased costs, and potential gaps in
              addressing both aspects simultaneously. Clean Sweep & PestGuard:
              Your one-stop solution for a spotless, pest-free home. Our
              integrated service combines top-notch house cleaning with
              specialized pest control, ensuring convenience, efficiency, and a
              healthier living environment for you.
            </Flex>
          </Flex>
        </Flex>
        <Flex
          justify="center"
          align="start"
          style={{ marginInline: "5rem", marginTop: "5rem" }}
        >
          <Image
            style={{ width: "20vw" }}
            preview={false}
            src="https://kwikserve.weebly.com/uploads/1/4/7/3/147314381/published/screenshot-2023-11-23-132554.png?1700845930"
          />
          <Flex vertical gap={20} style={{ width: "60vw", paddingInline: "2rem" }}>
            <Title
              level={3}
              style={{
                fontFamily: "Edu SA Beginner",
                fontWeight: "bold",
                color: "green",
                fontSize: "2rem",
                textAlign: "left",
              }}
            >
              Why Choose KwikServe Fitness at Home?​
            </Title>
            <Flex
              vertical
              style={{ fontFamily: "Edu SA Beginner", fontSize: "1.5rem" }}
            >
              <Flex gap={10} align="start">
                <CheckCircleOutlined style={{ color: "#52c41a" }} />
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Edu SA Beginner",
                    fontSize: "1.3rem",
                  }}
                >
                  <b>Expert Guidance:</b> Our certified trainers bring a wealth
                  of experience and knowledge to guide you through safe and
                  effective workouts.
                </Text>
              </Flex>
              <Flex gap={10} align="start">
                <CheckCircleOutlined style={{ color: "#52c41a" }} />
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Edu SA Beginner",
                    fontSize: "1.3rem",
                  }}
                >
                  <b>Convenience:</b> Say goodbye to commute hassles! Work out
                  in the comfort of your home, at your pace.
                </Text>
              </Flex>
              <Flex gap={10} align="start">
                <CheckCircleOutlined style={{ color: "#52c41a" }} />
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "Edu SA Beginner",
                    fontSize: "1.3rem",
                  }}
                >
                  <b>Personalized Plans:</b> Tailored workouts that suit your
                  fitness level, goals, and unique needs.
                </Text>
              </Flex>
            </Flex>
            <Text style={{ textAlign: "left", fontSize: "1.3rem",fontFamily: "Edu SA Beginner" }}>
              Embark on a fitness journey that transcends boundaries! 🌟 Invest
              in your health today with KwikServe. Your well-being, our
              priority! 💚🏋‍♀
            </Text>
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
}

export default AboutUs;
