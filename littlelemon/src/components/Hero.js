import React from "react";
import { Link, Button, Text, Image, Heading, HStack, VStack, } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Pavolva from "../images/pavlova.jpg"

const title = "Little Lemon Restaurant";
const text = "Best Restauarant in San Francisco"
const buttonText = "Book Now"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const Hero = () => {
  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#495E57"
  >
    <HStack>
    <VStack
    >

        <Heading>{title}</Heading>
        <Text>{text}</Text>

        <Link
            href="./#book-section"
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
        src={Pavolva}
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
