import React, { useEffect, useRef } from "react";
import { Text, Nav, Image, Grid, Box, HStack } from "@chakra-ui/react";
import logo from "../images/logo.jpg";
// import { NavLink } from "react-router-dom";



const navigation = [
  {
    destination: "Home",
    href: "./",
  },
  {
    destination: "About",
    href: "./",
  },
  {
    destination: "Menu",
    href: "./",
  },
  {
    destination: "Reservation",
    href: "./",
  },
  {
    destination: "Order",
    href: "./",
  },
  {
    destination: "Login",
    href: "./",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Grid
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#fff"
      ref={headerRef}
      
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>

          <Image
              width="50%"
              objectFit='cover'
              src={logo}
              alignItems={"left"}
              >
            </Image>

            {/* <HStack spacing={8}>
              <Image
              width="50%"
              objectFit='cover'
              src={logo}
              >
              </Image> */}


            {/* </HStack> */}
          </nav>

          <nav>
            <HStack 
              spacing={8}
              
              
              
               
              
              >

              {navigation.map(({ destination , href }) => (
                <Text
                color={"#000"}
                key={href}
                to={href}
                _hover={{
                  color: "#f4ce14",
                  cursor: "pointer",
                }}
                fontWeight={"bold"}
                >



                  { destination }
                </Text>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Grid>
  );
 };

 export default Header;