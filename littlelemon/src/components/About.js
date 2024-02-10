
import React from "react";
import { Container, Link, Button, Text, Image, Heading, HStack, VStack, } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Double from "../images/double.png"

const title = "Little Lemon";
const description = "In 1995, siblings Adrian and Mario established Little Lemon. Despite the city's diverse culinary scene, the brothers noticed a gap in Mediterranean cuisine in Chicago. Motivated to introduce the tastes of their Italian hometown to the city, they embarked on a mission to bring these flavors to the people. Almost three decades later, Adrian and Mario still actively manage the Little Lemon restaurant."
const city = "Chicago"
const buttonText = "Reserve a table"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const About = () => {
  return (
  <FullScreenSection
    isDarkBackground
    backgroundColor="#495E57"
    marginTop={"2rem"}
    marginLeft={"8rem"}
    marginRight={"8rem"}
    marginBottom={"2rem"}

  >
    <HStack>
      <VStack
        alignItems="Left"
      >

          <Heading
          >{title}</Heading>

          <Heading
            fontStyle={"italic"}
          >{city}</Heading>

          <Text
            marginTop="1rem"
          >{description}</Text>

          <Link
              href="./#book-section"
          >

          </Link>

      </VStack>

       <Image
        src={Double}
        width="30%"
        margin="3rem"
        position="right"

        >

       </Image>
     
       </HStack>

   
  


  </FullScreenSection>

  
  );
};


export default About;
