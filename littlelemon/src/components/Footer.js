
import React from "react";
import { Box, Container, Link, Button, Text, Image, Heading, HStack, VStack, } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import LogoFooter from "../images/logo_footer.png"



const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>

      <HStack>
            <Image
            src={LogoFooter}
            width="10%"
            ></Image>

            <VStack>
              <Heading as="h3" size="md">Navigation</Heading>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Menu</Link>
              <Link>Reservations</Link>
              <Link>Order</Link>

            </VStack>
              

            <VStack>
              <Heading as="h3" size="md">Contact</Heading>

            </VStack>


            <VStack>
              <Heading as="h3" size="md">Connect</Heading>
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>TikTok</Link>


            </VStack>


            





      </HStack>





      </footer>
    </Box>
  );
};
export default Footer;


{/* <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Copyright LittleLemon© 2024</p>
        </Flex> */}