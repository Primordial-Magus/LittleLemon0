
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { HStack, Button, Box, Heading } from "@chakra-ui/react";
import Card from "./CardTestimonial";

const testimonials = [
  {
    name: "Sally",
    description:
      "Exceptional dining experience, seamlessly blending exquisite cuisine with impeccable service in a warmly inviting atmosphere.",
    getImageSrc: () => require("../images/sally.jpg"),
  },
  {
    name: "John",
    description:
      "At Little Lemon, the culinary artistry and attentive service combine to create an unforgettable dining experience, making it a standout destination for those seeking a delightful gastronomic adventure.",
    getImageSrc: () => require("../images/john.jpeg"),
  },
  {
    name: "Raymond",
    description:
    "At Little Lemon, the delectable cuisine and charming ambiance come together for a truly delightful dining experience that keeps me coming back for more.",
    getImageSrc: () => require("../images/raymond.jpg"),
  },
];

const buttonText = "Online Menu"

const TestimonialsSection = () => {
  return (
    <FullScreenSection
      p={8}
      spacing={8}
      marginLeft={"8rem"}
      marginRight={"8rem"}
      marginBottom={"3rem"}
    >

        
        <Box alignItems="center">
            <Heading as="h1" id="testimonials-section">
            Testimonials
            </Heading>
        </Box>


        
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            title={testimonial.name}
            description={testimonial.description}
            imageSrc={testimonial.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};


export default TestimonialsSection;