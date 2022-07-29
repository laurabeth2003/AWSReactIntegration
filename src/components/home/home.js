import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, View, Text } from "@aws-amplify/ui-react";
import background from "../../images/background.jpg";

export default function Home(props) {
  const { overrides } = props;
  return (
    <View
      width="100%"
      height="850px"
      position="absolute"
      top="60px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeroLayout2")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        border="1px solid black"
        src={background}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="10px"
        direction="column"
        position="relative"
        width="95%"
        left="2.5%"
        top="35px"
        height="780px"
        justifyContent="center"
        border="solid black 2px"
        alignItems="center"
        overflow="hidden"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(0,0,0,.6)"
        {...getOverrideProps(overrides, "Home")}
      >
        <Flex
          gap="24px"
          direction="column"
          height="228px"
          justifyContent="center"
          alignItems="center"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Type Lock Up")}
        >
          <Text
            fontFamily="Karla"
            fontSize="42px"
            fontWeight="700"
            width="100%"
            color="white"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            position="relative"
            padding="0px 0px 0px 0px"
            children="HELLO, I'M LAURA ERICKSON"
            {...getOverrideProps(overrides, "HELLO")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Main Body")}
          >
            <Text
              fontFamily="Karla"
              fontSize="32px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 30px 0px"
              whiteSpace="pre-wrap"
              children="FULL STACK DEVELOPER"
              {...getOverrideProps(
                overrides,
                "Ut enim ad minim veniam quis nostrud"
              )}
            ></Text>
          </Flex>
          <Button
            display="flex"
            gap="0"
            fontFamily="Karla"
            direction="row"
            fontSize={25}
            width="175px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            size="large"
            isDisabled={false}
            backgroundColor="#c7606f"
            border="black solid 2px"
            variation="primary"
            children="My Work"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </View>
  );
}
