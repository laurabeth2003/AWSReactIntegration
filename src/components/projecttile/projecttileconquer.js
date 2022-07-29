import React from "react";
import { Flex, Text, Image } from "@aws-amplify/ui-react";
import ConquerGuest from "../../images/conquerguest.jpg";
const ProjectTileConquer = (props) => {
  return (
    <Flex
      width="70%"
      borderRadius="50px"
      position="absolute"
      height="400px"
      top="90px"
      left="15%"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      border="1px black solid"
      style={{ cursor: "default" }}
      backgroundColor="#031218"
    >
      <Text fontFamily="Karla" fontSize="30px" fontWeight="300" color="white" children="Guest Pass Tracker" width="55%" position="absolute" left="0%" top="7%"></Text>
      <Image src={ConquerGuest} width="42.5%" left="56.7%" position="absolute" borderRadius="50px"></Image>
    </Flex>
  );
};

export default ProjectTileConquer;