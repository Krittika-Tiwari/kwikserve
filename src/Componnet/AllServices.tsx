import { Card, Col, Row } from "antd";
const { Meta } = Card;


const AllServices = () => {
    const services = [
        {
          name: "Women's Salon & Spa",
          imageUrl:
            "https://media.istockphoto.com/id/851007946/photo/woman-getting-hair-shampooed-at-salon.jpg?s=612x612&w=0&k=20&c=1kRvk2iAy6rBdfrfeAz7fhqPz8pvY_dgKmq_fHmjmLU=",
          description:
            "Indulge in a pampering experience with our Women's Salon & Spa services. From trendy haircuts and vibrant hair coloring to rejuvenating spa treatments and relaxing massages, we offer a range of services tailored to enhance your beauty and well-being.",
          facilities: [
            "Haircut",
            "Hair Coloring",
            "Hair Styling",
            "Manicure",
            "Pedicure",
            "Facial",
            "Massage",
            "Spa Treatments",
            "Waxing",
          ],
        },
        {
          name: "Men's Salon & Massage",
          imageUrl:
            "https://t4.ftcdn.net/jpg/04/69/68/17/360_F_469681744_FZWt6LKXLoCU4XVv8Cjx6ZFmwNlNLm7x.jpg",
          description:
            "Discover the ultimate grooming experience with our Men's Salon & Massage services. From classic haircuts and precise beard trims to relaxing massages and facial treatments, we provide a haven for modern gentlemen seeking style and relaxation.",
          facilities: [
            "Haircut",
            "Beard Trim",
            "Shave",
            "Massage",
            "Facial",
            "Waxing",
            "Hair Coloring",
            "Hair Styling",
          ],
        },
        {
          name: "HVAC Services",
          imageUrl:
            "https://us.123rf.com/450wm/fabrikacrimea/fabrikacrimea2007/fabrikacrimea200702511/152298221-young-black-man-repairman-checking-an-outside-air-conditioner-unit.jpg?ver=6",
          description:
            "Ensure optimal comfort and air quality in your home or office with our HVAC (Heating, Ventilation, and Air Conditioning) Services. From installation and repair to maintenance and indoor air quality solutions, we offer comprehensive HVAC services to meet your needs.",
          facilities: [
            "AC Installation",
            "AC Repair",
            "Heating Services",
            "Ventilation Services",
            "Indoor Air Quality Solutions",
          ],
        },
        {
          name: "House Cleaning",
          imageUrl:
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8zMl9pbWFnZV9vZl95b3VuZ19zbWlsaW5nX3dvbWFuX2luX2dsb3Zlc19jbGVhbl8xNDUwZTcyYS04ODcyLTRmYzktOTUxOC01ZWRmYzkyY2ViZmVfMS5qcGc.jpg",
          description:
            "Experience pristine cleanliness and hygiene with our House Cleaning services. Whether you need deep cleaning, regular maintenance, or specialized cleaning for specific areas, our professional cleaners are equipped to leave your home spotless and fresh.",
          facilities: [
            "Deep Cleaning",
            "Regular Cleaning",
            "Kitchen Cleaning",
            "Bathroom Cleaning",
            "Window Cleaning",
            "Carpet Cleaning",
            "Upholstery Cleaning",
          ],
        },
        {
          name: "Pest Control",
          imageUrl:
            "https://media.istockphoto.com/id/1066978818/photo/exterminator-working.jpg?s=612x612&w=0&k=20&c=sddrtDtVPnyn8jIukuNcyCQS0gm6I4GwQQ_CGvs9UYM=",
          description:
            "Protect your home or business from pests with our comprehensive Pest Control services. From general pest control and termite treatments to rodent and bed bug extermination, we employ effective solutions to ensure a pest-free environment.",
          facilities: [
            "General Pest Control",
            "Termite Control",
            "Rodent Control",
            "Bed Bug Control",
            "Mosquito Control",
            "Cockroach Control",
          ],
        },
        {
          name: "PreNatal Yoga",
          imageUrl:
            "https://static.wixstatic.com/media/e1f7f0_99d7a7988fa2423fa527e81bff8d7c74~mv2.jpg/v1/fill/w_2500,h_1666,al_c/e1f7f0_99d7a7988fa2423fa527e81bff8d7c74~mv2.jpg",
          description:
            "Experience the benefits of yoga during pregnancy with our PreNatal Yoga classes. Designed to promote physical and emotional well-being during pregnancy and prepare expectant mothers for childbirth, our classes offer gentle exercises, breathing techniques, and relaxation practices tailored to the needs of pregnant women.",
          facilities: [
            "Pre-natal Yoga",
            "Post-natal Yoga",
            "Parent-child Yoga",
            "Yoga for Moms",
            "Yoga for Dads",
            "Yoga for Kids",
          ],
        },
      ];
    
    return (
        <Row style={{marginTop:"5rem", marginBottom:"5rem", paddingInline:"5rem"}} gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              hoverable
              cover={<img alt={service.name} src={service.imageUrl} style={{height:"18rem", width:"100%"}} />}
            >
              <Meta title={service.name} description={service.description} />
              
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  
  export default AllServices;