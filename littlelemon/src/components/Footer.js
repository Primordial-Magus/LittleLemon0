
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
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Menu</Link>
              <Link>Reservations</Link>
              <Link>Order</Link>
              <Link>Login</Link>

            </VStack>
              

            <VStack alignItems="left">
              <Heading as="h3" size="md">Contact</Heading>
              <Text>2801 Maldove Street, Chicago Illinois</Text>
              <Text>(123)-456-7891</Text>
              <Link>littlelemon@gmail.com</Link>

            </VStack>


            <VStack alignItems="left">
              <Heading as="h3" size="md">Connect</Heading>
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>TikTok</Link>


            </VStack>


            





      </HStack>


    </FullScreenSection>
  );
};
export default Footer;
