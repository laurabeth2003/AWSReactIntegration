import React from "react";
import { Flex, Text, Image } from "@aws-amplify/ui-react";
import Scheduler from "../../images/scheduler.avif";
const ProjectTileRoundRobin = (props) => {
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
      <Image src={Scheduler} width="42.5%" left="1.3%" position="absolute" borderRadius="50px"></Image>
      <Text fontFamily="Karla" fontSize="30px" fontWeight="300" color="white" children="Round Robin Scheduler" width="55%" position="absolute" left="45%" top="7%"></Text>
    </Flex>
  );
};

export default ProjectTileRoundRobin;
