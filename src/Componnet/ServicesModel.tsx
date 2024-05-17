import React from "react";
import { Modal, List, Collapse, Button, Flex, Row, Col, Card } from "antd";
import { Service } from "./types";
import { useNavigate } from "react-router-dom";

interface Props {
  selectedService: Service | null;
  modalVisible: boolean;
  closeModal: () => void;
}

const { Panel } = Collapse;

const ServiceModal: React.FC<Props> = ({
  selectedService,
  modalVisible,
  closeModal,
}) => {
  const navigate = useNavigate();

  const handleBook = (
    service: number,
    facality: number,
    FacilityserviceId: number
  ) => {
    console.log(service, facality, FacilityserviceId);

    navigate(`/ServicePaymentPage/${service}/${facality}/${FacilityserviceId}`);
  };
  return (
    <Modal
      title={`${selectedService ? selectedService.name + " Facilities" : ""}`}
      open={modalVisible}
      onCancel={closeModal}
      footer={null}
      width={800}
      bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
    >
      {selectedService && (
        <List
          style={{ width: "100%", paddingInline: "2rem" }}
          dataSource={selectedService.facilities}
          renderItem={(facility, index) => (
            <List.Item key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h4>{facility.name}</h4>
                {facility.includes && facility.includes.length > 0 && (
                  <Collapse>
                    <Panel header="Includes" key={""}>
                      <ul>
                        {facility.includes.map((item: any, index: any) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </Panel>
                  </Collapse>
                )}
                <List
                  style={{ width: "100%" }}
                  dataSource={facility.services}
                  renderItem={(service, subIndex) => (
                    <List.Item
                      key={subIndex}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Flex gap={20} vertical style={{ width: "100%" }}>
                        <Flex justify="space-between" style={{ width: "100%" }}>
                          <span>{service.name}</span>
                          <Flex align="center" gap={30}>
                            <span>Price: {service.price}</span>
                            <Button
                              onClick={() =>
                                handleBook(selectedService.key, index, subIndex)
                              }
                              style={{
                                backgroundColor: "#fca503",
                                color: "white",
                              }}
                            >
                              Book
                            </Button>
                          </Flex>
                        </Flex>

                        {((service.includes ?? []).length > 0 ||
                          (service.brands ?? []).length > 0 ||
                          (service.works ?? []).length > 0) && (
                          <Collapse>
                            <Panel style={{padding:"0rem"}} header="Service Details" key="1">
                              {(service.includes ?? []).length > 0 && (
                                <div style={{ marginBottom: "5rem" }}>
                                  <h1>Includes:</h1>
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      paddingLeft: 0,
                                    }}
                                  >
                                    {service.includes?.map((item, idx) => (
                                      <li
                                        key={idx}
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            color: "green",
                                            marginRight: "8px",
                                          }}
                                        >
                                          ✔️
                                        </span>

                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {(service.brands ?? []).length > 0 && (
                                <div style={{ marginBottom: "5rem" }}>
                                  <h1>Brands:</h1>
                                  <Row gutter={[16, 16]}>
                                    {service.brands?.map((brand, idx) => (
                                      <Col key={idx} xs={24} sm={12} md={8}>
                                        <Card
                                          style={{
                                            height: "100%",
                                            width: "13vw",

                                            borderRadius: 0,
                                            padding: "1rem",
                                            boxShadow:
                                              "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            transition: "0.3s",
                                          }}
                                          hoverable
                                          cover={
                                            <img
                                              alt={brand.name}
                                              src={brand.image}
                                              style={{
                                                height: "4rem",
                                                objectFit: "cover",
                                                width: "100%",
                                              }}
                                            />
                                          }
                                        >
                                          <Card.Meta title={brand.name} />
                                        </Card>
                                      </Col>
                                    ))}
                                  </Row>
                                </div>
                              )}
                              
                              {(service.works ?? []).length > 0 && (
                                <div
                                  style={{
                                    position: "relative",
                                    paddingLeft: "20px",
                                    marginLeft: "10px",
                                    marginBottom: "5rem",
                                  }}
                                >
                                  <h1>Works:</h1>
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      paddingLeft: 0,
                                      position: "relative",
                                    }}
                                  >
                                    {service.works?.map((work, idx) => (
                                      <li
                                        key={idx}
                                        style={{
                                          marginBottom: "20px",
                                          position: "relative",
                                          paddingLeft: "30px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "0",
                                            top: "0",
                                            width: "20px",
                                            height: "20px",
                                            backgroundColor: "#fca503",
                                            borderRadius: "50%",
                                            zIndex: 1,
                                          }}
                                        ></div>
                                        {idx <
                                          (service.works?.length ?? 0) - 1 && (
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: "9px",
                                              top: "20px",
                                              width: "2px",
                                              height: "calc(100% + 20px)",
                                              backgroundColor: "#fca503",
                                              zIndex: 0,
                                            }}
                                          ></div>
                                        )}
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <img
                                            src={work.image}
                                            alt={work.title}
                                            style={{
                                              width: "13vw",
                                              height:"15vh"  ,
                                              marginRight: "2rem",
                                            }}
                                          />
                                          <div>
                                            <strong style={{ fontSize: "1.2rem" }}>{work.title}:</strong>{" "}
                                            <p> {work.description}</p>
                                           
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </Panel>
                          </Collapse>
                        )}
                      </Flex>
                    </List.Item>
                  )}
                />
              </div>
            </List.Item>
          )}
        />
      )}

      <style>
        {`
              ::-webkit-scrollbar {
                width: 5px; /* Make the scrollbar wider */
                height: 5px;
              }

              ::-webkit-scrollbar-track {
                background: #f1f1f1;
              }

              ::-webkit-scrollbar-thumb {
                background: #bada55;

                border-radius: 5px;
              }

              ::-webkit-scrollbar-thumb:hover {
                background: #003300;
              }
            `}
      </style>
    </Modal>
  );
};

export default ServiceModal;
