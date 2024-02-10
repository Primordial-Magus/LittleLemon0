import React from "react";
import { Container, Link, Button, Text, Image, Heading, HStack, VStack, } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Dishes from "../images/dishes.jpg"

const title = "Little Lemon";
const description = "We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist."
const city = "Chicago"
const buttonText = "Reserve a table"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const Hero = () => {
  return (
  <FullScreenSection
    isDarkBackground
    backgroundColor="#495E57"
    marginTop={"8rem"}
    marginLeft={"8rem"}
    marginRight={"8rem"}
    marginBottom={"3rem"}

  >
    <HStack>
      <VStack
        alignItems="Left"
      >

          <Heading
          fontSize="2.5rem"

          >{title}</Heading>

          <Heading
            fontStyle={"italic"}
          >{city}</Heading>

          <Text
            marginTop="1rem"
          >{description}</Text>

          <Link
              href="./#booking-section"
          >

              <Button
              marginTop="3rem"
              colorScheme='yellow'
              size="lg"
              aria-label="On Click"
              >{buttonText}</Button>

          </Link>

      </VStack>

       <Image
        src={Dishes}
        width="50%"
        borderRadius="1rem"
        margin="3rem"
        position="right"

        >

       </Image>

       </HStack>

   
  


  </FullScreenSection>

  
  );
};


export default Hero;
