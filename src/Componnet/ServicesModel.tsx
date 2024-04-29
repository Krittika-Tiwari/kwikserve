import React from "react";
import { Modal, List, Collapse, Button, Flex } from "antd";
import { Service } from "./types";

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
          renderItem={(facility) => (
            <List.Item key={facility.name}>
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
                  renderItem={(service) => (
                    <List.Item
                      key={service.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span>{service.name}</span>
                      <Flex align="center" gap={30}>
                        <span>Price: {service.price}</span>
                        <Button style={{backgroundColor:"#fca503", color:"white"}}>Book</Button>
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