import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const specials = [
  {
    title: "Our New Menu",
    description:
      "Enjoy our exquisite menu with dishes from around the world.",
    targetLabel: "See More ",
    target: "./",
    getImageSrc: () => require("../images/skewers.jpg"),
  },
  {
    title: "Stunning Decor",
    description:
      "Step into paradise at an affordable price.",
      targetLabel: "See More ",
      target: "./",
    getImageSrc: () => require("../images/table.png"),
  },
  {
    title: "Exceptional Service",
    description:
    "Experience service like no other. Staff are well mannered, polite and deliver excellence",
    targetLabel: "See More ",
    target: "./",
    getImageSrc: () => require("../images/chef.jpg"),
  },
];

const SpecialsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="specials-section">
        LittleLemon Difference
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {specials.map((special) => (
          <Card
            key={special.title}
            title={special.title}
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

export default SpecialsSection;
