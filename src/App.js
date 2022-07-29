import React from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { Flex } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import Menu from "./components/menu/menu";
import Home from "./components/home/home";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <Flex width="100%"
        gap="0px"
        display="grid"
        height="100%"
        textAlign="left"
        position="absolute">
        <Menu />
        <Home />
        <About />
        <Portfolio />
      </Flex>
    </div>
  );
}

export default App;
