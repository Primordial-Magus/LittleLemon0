
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Container, Link, Button, Text, Image, Heading, HStack, VStack, } from "@chakra-ui/react";
import LogoFooter from "../images/logo_footer.png"



const Footer = () => {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#495E57"
      marginTop={"2rem"}
      marginLeft={"8rem"}
      marginRight={"8rem"}
      marginBottom={"2rem"}
      >

      <HStack justifyContent={"space-between"} alignItems="flex-start" >
            <Image
            src={LogoFooter}
            width="20%"
            ></Image>

            <VStack alignItems="left">
              <Heading as="h3" size="md">Navigation</Heading>
              <Link aria-label="On Click">Home</Link>
              <Link aria-label="On Click">About</Link>
              <Link aria-label="On Click">Menu</Link>
              <Link aria-label="On Click">Reservations</Link>
              <Link aria-label="On Click">Order</Link>
              <Link aria-label="On Click">Login</Link>

            </VStack>
              

            <VStack alignItems="left">
              <Heading as="h3" size="md">Contact</Heading>
              <Text>2801 Maldove Street, Chicago Illinois</Text>
              <Text>(123)-456-7891</Text>
              <Link aria-label="On Click">littlelemon@gmail.com</Link>

            </VStack>


            <VStack alignItems="left">
              <Heading as="h3" size="md">Connect</Heading>
              <Link aria-label="On Click">Facebook</Link>
              <Link aria-label="On Click">Instagram</Link>
              <Link aria-label="On Click">TikTok</Link>


            </VStack>


            





      </HStack>


    </FullScreenSection>
  );
};
export default Footer;
