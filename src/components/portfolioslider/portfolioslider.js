import "../../App.css";
import { useEffect, useState } from "react";
import { Flex, Text, Button } from "@aws-amplify/ui-react";
import comic01 from "../../images/comic01.jpg";
import comic02 from "../../images/comic02.jpg";
import comic03 from "../../images/comic03.jpg";
import ProjectTileConquer from "../projecttile/projecttileconquer";
import Portfolio from "../portfolio/portfolio";
import ProjectTileTravideas from "../projecttile/projecttiletravideas";
import ProjectTileRoundRobin from "../projecttile/projecttileroundrobin";

function PortfolioSlider() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const Conquer = (classname) => {
    {
      console.log(classname);
    }
    return (
      <div className={classname}>
        <ProjectTileConquer />
      </div>
    );
  };

  const Travideas = (classname) => {
    return (
      <div className={classname}>
        <ProjectTileTravideas />
      </div>
    );
  };

  const RoundRobin = (classname) => {
    return (
      <div className={classname}>
        <ProjectTileRoundRobin />
      </div>
    );
  };

  const cards = [
    {
      id: "1",
      image: Conquer,
    },
    {
      id: "2",
      image: Travideas,
    },
    {
      id: "3",
      image: RoundRobin,
    },
  ];

  function rightClick() {
    if (index !== cards.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function leftClick() {
    if (index == 0) {
      setIndex(cards.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="App">
      <div className="carousel">
        <Button
          onClick={leftClick}
          fontFamily="Karla"
          fontSize="80px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="80px"
          textAlign="center"
          border="none"
          width="5%"
          left="5%"
          top="240px"
          position="absolute"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="<"
        ></Button>
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return <div>{item.image(className)}</div>;
        })}
        <Button
          onClick={rightClick}
          fontFamily="Karla"
          fontSize="80px"
          width="5%"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="80px"
          textAlign="center"
          display="flex"
          border="none"
          top="240px"
          left="90%"
          shrink="0"
          position="absolute"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=">"
        ></Button>
      </div>
    </div>
  );
}

export default PortfolioSlider;
