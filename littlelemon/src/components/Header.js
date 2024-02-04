import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    id: "s1"
  },
  {
    icon: faGithub,
    url: "https://github.com",
    id: "s2"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    id: "s3"
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    id: "s4"
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    id: "s5"
  },
];

const Header = () => {
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

 

  // handlescrollings show / hide header
  // useEffect(() => ) {
  //   window.addEventListener('scroll', handle)
  // }

  
 



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
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">

        <HStack
          spacing="15px"
          px={16}
          py={4}
          
          justifyContent="space-between"
          alignItems="center"
          

        >
          <nav key="navigation1">
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
            
              {socials.map((socialsItem) => (
                <a href={socialsItem.url} key={socialsItem.id}>
                  <FontAwesomeIcon icon={socialsItem.icon} size="2x" />
                </a>)) }
            </HStack>
            
           
            
          </nav>
          <nav key="navigation2">
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="./#projects-section">Projects</a>
              <a href="./#contactme-section">Contact Me</a>
              
              
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
