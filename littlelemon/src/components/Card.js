import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
  <VStack
      borderStyle="solid"
          backgroundColor="#FFFFFF"
          borderRadius={"lg"}
  
  
  >
    <HStack>
      <VStack
          px={4}
          py={4}
      >
        <Box>
          <Image 
          src={imageSrc}
          >
          </Image>
          <Heading

          fontSize={22}
          size={20}
          position="center"
          py={4}
          >
            {title}
          </Heading>
          <Box height={"100px"}    >
            <Text
            color="#000000"
          
            >
            {description}
            </Text>
          </Box>
          <Box>
            <Text
            py={4}
            color="#000000"
            >
                {"See More "}          
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Text>
          </Box>
          
        </Box>
      </VStack>

    </HStack>

  </VStack>

  );
  


};

export default Card;
