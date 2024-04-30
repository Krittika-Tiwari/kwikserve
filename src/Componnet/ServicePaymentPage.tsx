import { Button, Card, Flex, Image, Layout } from "antd";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Lottie from "lottie-react";
import  cat from "../Assets/cat.json";

const { Content } = Layout;

const ServicePaymentPage = () => {
  const { service, facality, FacilityserviceId } = useParams();
  const { isAuthenticated, loginWithRedirect } = useAuth0(); 
  const [isLoading, setIsLoading] = useState(false);

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
    {
      key: 6,
      name: "PreNatal Yoga",
      imageUrl:
        "https://static.wixstatic.com/media/e1f7f0_99d7a7988fa2423fa527e81bff8d7c74~mv2.jpg/v1/fill/w_2500,h_1666,al_c/e1f7f0_99d7a7988fa2423fa527e81bff8d7c74~mv2.jpg",
      description:
        "Experience the benefits of yoga during pregnancy with our PreNatal Yoga classes. Designed to promote physical and emotional well-being during pregnancy and prepare expectant mothers for childbirth, our classes offer gentle exercises, breathing techniques, and relaxation practices tailored to the needs of pregnant women.",
      facilities: [
        {
          name: "Online Sessions",
          services: [
            { name: "15 sessions (1 month)", price: 4499 },
            { name: "45 sessions (3 months)", price: 13199 },
            { name: "135 sessions (9 months)", price: 38499 },
          ],
        },
        {
          name: "At Home (Personal Training)",
          services: [
            { name: "15 sessions (1 month)", price: 6999 },
            { name: "45 sessions (3 months)", price: 20699 },
            { name: "135 sessions (9 months)", price: 60999 },
          ],
        },
      ],
    },
  ];

  const selectedService = services.find(
    (servicess) => String(servicess.key) === service
  );

  const selectedFacilityIndex = parseInt(facality || "0", 10);
  const FacilityserviceIds = parseInt(FacilityserviceId || "0", 10);

  const selectedFacility =
    selectedService && selectedService.facilities[selectedFacilityIndex];
  const FacilityserviceIdss =
    selectedFacility && selectedFacility.services[FacilityserviceIds];


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
          marginInline: "5rem",
          marginBottom: "5rem",
        }}
      >
        <Flex
          vertical
          justify="center"
          align="center"
          style={{ width: "50%", marginRight: "1rem" }}
        >
          {selectedService && (
            <Flex
              vertical
             
              align="center"
              justify="center"
              style={{
                padding: "2rem",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  maxWidth: "30vw",
                  marginBottom: "1rem",
                  borderRadius: "0.5rem",
                }}
                preview={false}
                src={selectedService.imageUrl}
              />
              <Flex gap={5}  vertical align="center" style={{width:"95%"}}>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {selectedService.name}
                </h3>
                <p style={{ marginBottom: "1rem", color: "#666" }}>
                  {selectedService.description}
                </p>
                {selectedFacility && (
                  <Card
                    title={selectedFacility.name}
                    style={{
                      width:"100%",
                      marginBottom: "1rem",
                      borderRadius: "0.5rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {FacilityserviceIdss && (
                      <Flex
                        style={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.5rem 1rem",
                          background: "#f0f0f0",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <span style={{ color: "#333" }}>
                          {FacilityserviceIdss.name}
                        </span>
                        <span style={{ marginLeft: "1rem", color: "#333" }}>
                          {" "}
                          {/* Increased space */}
                          Rs: {FacilityserviceIdss.price}
                        </span>
                      </Flex>
                    )}
                  </Card>
                )}
              </Flex>
            </Flex>
          )}
        </Flex>

       
        <Flex
        // align="center"
        justify="center"
      
          style={{
            width: "50%",
            marginLeft: "1rem",
            
            background: "#f9f9f9",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {!isAuthenticated ? (
            <div>
              <Lottie style={{ width: "35vw",height:"30vw" }} animationData={cat} loop={true} />
              <h3 >Please log in to continue.</h3>
              <Button type="primary" onClick={handleLogin} style={{backgroundColor: "#fca503", width: "10vw"}} loading={isLoading}>
                Log In
              </Button>
            </div>
          ) : (
            <Button type="primary"  >
              Proceed to Payment
            </Button>
          )}
       
        </Flex>
      </Flex>
    </Content>
  );
};

export default ServicePaymentPage;
