import React, { useEffect, useRef } from "react";
import { Image, Box, HStack } from "@chakra-ui/react";
import logo from "../images/logo.jpg";


const navigation = [
  {
    destination: "Home",
    url: "./",
  },
  {
    destination: "About",
    url: "./",
  },
  {
    destination: "Menu",
    url: "./",
  },
  {
    destination: "Reservation",
    url: "./",
  },
  {
    destination: "Order Online",
    url: "./",
  },
  {
    destination: "Login",
    url: "./",
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
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
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
            <HStack spacing={8}>
              <Image
              width="50%"
              objectFit='cover'
              src={logo}
              >
              </Image>


            </HStack>
          </nav>

          <nav>
            <HStack 
              spacing={8}
              >

              {navigation.map(({ destination , url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  { destination }

                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
 };

 export default Header;