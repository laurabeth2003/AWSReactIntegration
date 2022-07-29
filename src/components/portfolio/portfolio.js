import React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";
import PortfolioSlider from "../portfolioslider/portfolioslider";
const Portfolio = (props) => {
  return (
    <Flex
      position="absolute"
      top="1800px"
      width="100%"
      display="flex"
      textAlign="center"
      justifyContent="center"
    >
      <Text
        position="absolute"
        children="PORTFOLIO"
        fontFamily="Karla"
        top="15px"
        fontWeight={600}
        fontSize="42px"
        textAlign="center"
      ></Text>
      <PortfolioSlider />
    </Flex>
  );
};

export default Portfolio;
