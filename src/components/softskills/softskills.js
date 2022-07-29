import React from "react";
import { Flex, Text, Image } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";

const SoftSkills = (props) => {
  const { overrides } = props;
  return (
    <Flex
      width="18%"
      height="120px"
      backgroundColor="#a64150"
      borderRadius="50px"
      {...getOverrideProps(overrides, "SoftSkillBox")}
    >
      <Image
        src={props.logo}
        position="relative"
        width="80px"
        height="80px"
        left="6%"
        top="15%"
      ></Image>
      <Text
        children={props.content}
        fontFamily="Karla"
        color="white"
        fontWeight="500"
        width="70%"
        fontSize="28px"
        left="0%"
        top="28%"
        position="relative"
      ></Text>
    </Flex>
  );
};

export default SoftSkills;
