import React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";

const SkillBar = (props) => {
  const { overrides } = props;
  return (
    <Flex
      width="100%"
      height="30px"
      position="relative"
      justifyContent="start"
      alignItems="start"
      border="black 1px solid"
      backgroundColor="#e6e6e6"
      {...getOverrideProps(overrides, "SkillBar")}
    >
      <Flex
        width="20%"
        top="0px"
        height="28px"
        left="0%"
        justifyContent="center"
        position="relative"
        
        backgroundColor="#a64150"
        {...getOverrideProps(overrides, "TextContainer")}
      >
        <Text
          fontFamily="Karla"
          fontSize="15px"
          fontWeight="500"
          color="white"
          top="2px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={props.skill}
          {...getOverrideProps(overrides, "Skill")}
        ></Text>
      </Flex>
      <Flex
        width={(props.percentadjust * .8).toString() + "%"} 
        top="0px"
        height="28px"
        left="20%"
        justifyContent="center"
        alignItems="left"
        position="absolute"
        backgroundColor="#c7606f"
        {...getOverrideProps(overrides, "PercentBar")}
      ></Flex>
      <Text
          fontFamily="Karla"
          fontSize="15px"
          right="1.5%"
          top="2px"
          fontWeight="400"
          color="black"
          position="absolute"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={props.percent}
          {...getOverrideProps(overrides, "Percent")}
        ></Text>
    </Flex>
  );
};

export default SkillBar;
