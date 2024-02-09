import React from "react";
import FullScreenSection from "./FullScreenSection";
import { HStack, Button, Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const specials = [
  {
    name: "Greek Salad",
    description:
      "O",
    targetLabel: "Order for Delivery",
    target: "./",
    getImageSrc: () => require("../images/greek_salad.jpg"),
  },
  {
    name: "Bruschetta",
    description:
      "S",
      targetLabel: "Order for Delivery",
      target: "./",
    getImageSrc: () => require("../images/bruschetta.jpg"),
  },
  {
    name: "Lemon Dessert",
    description:
    "E",
    targetLabel: "Order for Delivery",
    target: "./",
    getImageSrc: () => require("../images/lemon_dessert.jpg"),
  },
];

const buttonText = "Online Menu"

const SpecialsSection = () => {
  return (
    <FullScreenSection
      p={8}
      alignItems="flex-start"
      spacing={8}
      marginLeft={"8rem"}
      marginRight={"8rem"}
      marginBottom={"3rem"}
    >
      <Box justifyContent="space-between">
        <Heading as="h1" id="specials-section">
          This weeks specials
        </Heading>

        <Button
              mt="1rem"
              colorScheme='yellow'
              size="lg"
              aria-label="On Click"
              >{buttonText}
        </Button>

      </Box>

      
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {specials.map((special) => (
          <Card
            key={special.name}
            title={special.name}
            description={special.description}
            imageSrc={special.getImageSrc()}
            targetLabel={special.targetLabel}
            target={special.target}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};




//  const ProjectsSection = () => { 
//   return ( 
//     <FullScreenSection 
//       backgroundColor="#14532d" 
//       isDarkBackground 
//       p={8} 
//       alignItems="flex-start" 
//       spacing={8} 
//     > 
//       <Heading as="h1" id="projects-section"> 
//         Featured Projects 
//       </Heading> 
//       <Box 
//         display="grid" 
//         gridTemplateColumns="repeat(2,minmax(0,1fr))" 
//         gridGap={8} 
//       > 
//         {projects.map((project) => ( 
//           <Card 
//             key={project.title} 
//             title={project.title} 
//             description={project.description} 
//             url="https://github.com/rgommezz/react-native-offline" 
//             imageSrc={project.getImageSrc()} 
//           /> 
//         ))} 
//       </Box> 
//     </FullScreenSection> 
//   ); 
//  }; 



export default SpecialsSection;