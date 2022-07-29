/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Button } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const goToAbout = () => {
    window.scrollTo({
      top: 855,
      behavior: "smooth",
    });
  };
  const goToPortfolio = () => {
    window.scrollTo({
      top: 905,
      behavior: "smooth",
    });
  };
  const goToResume = () => {
    window.scrollTo({
      top: 905,
      behavior: "smooth",
    });
  };
  const goToFunFacts = () => {
    window.scrollTo({
      top: 905,
      behavior: "smooth",
    });
  };
  const goToContact = () => {
    window.scrollTo({
      top: 905,
      behavior: "smooth",
    });
  };
  return (
    <Flex
      gap="20px"
      direction="row"
      width="100%"
      justifyContent="center"
      alignItems="center"
      style={{zIndex:1}}
      position="fixed"
      top="0px"
      left="0px"
      padding="18px 32px 18px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="fit-content"
        height="20px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ContentRow")}
      ></Flex>
      <Flex
        gap="35px"
        direction="row"
        alignItems="center"
        grow="1"
        height="18px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Button
          onClick={goToHome}
          fontFamily="Karla"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          border="none"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Button>
        <Button
          fontFamily="Karla"
          fontSize="16px"
          onClick={goToAbout}
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          border="none"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Button>
        <Button
          fontFamily="Karla"
          fontSize="16px"
          onClick={goToPortfolio}
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          border="none"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Portfolio"
          {...getOverrideProps(overrides, "Portfolio")}
        ></Button>
        <Button
          fontFamily="Karla"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          onClick={goToResume}
          display="flex"
          border="none"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Resume"
          {...getOverrideProps(overrides, "Resume")}
        ></Button>
        <Button
          fontFamily="Karla"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          onClick={goToFunFacts}
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          border="none"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fun Facts"
          {...getOverrideProps(overrides, "FunFacts")}
        ></Button>
        <Button
          fontFamily="Karla"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          onClick={goToContact}
          shrink="0"
          border="none"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contact"
          {...getOverrideProps(overrides, "Contact")}
        ></Button>
      </Flex>
    </Flex>
  );
}
