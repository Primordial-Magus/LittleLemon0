import React from "react";
import FullScreenSection from "./FullScreenSection";
import { HStack, Button, Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const specials = [
  {
    name: "Greek Salad",
    description:
      "Mouthwatering Greek salad, a harmonious blend of juicy tomatoes, crisp cucumbers, tangy feta, olives, and vibrant herbs, drizzled with olive oil.",
    targetLabel: "Order for Delivery",
    target: "./",
    getImageSrc: () => require("../images/greek_salad.jpg"),
  },
  {
    name: "Bruschetta",
    description:
      "Savor the exquisite flavors of bruschetta: Toasted bread topped with ripe tomatoes, garlic, basil, and a hint of balsamic, creating a delightful Italian appetizer.",
      targetLabel: "Order for Delivery",
      target: "./",
    getImageSrc: () => require("../images/bruschetta.jpg"),
  },
  {
    name: "Lemon Dessert",
    description:
    "Experience pure bliss with our lemon dessert. A symphony of sweet and tangy flavors that captivate your taste buds in every delightful, citrus-infused bite.",
    targetLabel: "Order for Delivery",
    target: "./",
    getImageSrc: () => require("../images/lemon_dessert.jpg"),
  },
];

const buttonText = "Online Menu"

const Highlights = () => {
  return (
    <FullScreenSection
      p={8}
      alignItems="flex-start"
      spacing={8}
      marginLeft={"8rem"}
      marginRight={"8rem"}
      marginBottom={"3rem"}
    >
      <Box>
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


export default Highlights;