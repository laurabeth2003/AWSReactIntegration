import React from "react";
import SkillBar from "../skillbar/skillbar";
import SoftSkills from "../softskills/softskills";
import { Flex, Text } from "@aws-amplify/ui-react";
import teachable from "../../images/teachable.png"
import learning from "../../images/learning.png"
import working from "../../images/working.png"
import leadership from "../../images/leadership.png"
import mentoring from "../../images/mentoring.png"
const About = (props) => {
  return (
    <Flex
      position="absolute"
      top="905px"
      width="100%"
      display="flex"
      textAlign="center"
      justifyContent="center"
    >
      <Text
        position="absolute"
        children="ABOUT"
        fontFamily="Karla"
        top="15px"
        fontWeight={600}
        fontSize="42px"
        textAlign="center"
      ></Text>
      <Flex
        position="absolute"
        display="flex"
        flex-direction="row"
        gap="2.5%"
        left="5%"
        width="90%"
        top="100px"
      >
        <SoftSkills content="Fast Learning" logo={learning}/>
        <SoftSkills content="Motivated" logo={leadership}/>
        <SoftSkills content="Mentor" logo={mentoring}/>
        <SoftSkills content="Hard Working" logo={working}/>
        <SoftSkills content="Teachable" logo={teachable}/>
      </Flex>
      <Flex
        width="39%"
        left="7%"
        top="250px"
        gap="0px"
        display="grid"
        fontFamily="Karla"
        fontWeight="400"
        fontSize="18px"
        lineHeight="32px"
        height="100%"
        textAlign="left"
        position="absolute"
      >
        <p>&emsp;&emsp;&ensp;Hello, I'm Laura Erickson. At the end of 9th grade, I attended a two-week long coding camp. It barely scratched the surface of numerous technical concepts, but it was enough to know that I wanted to program for a living. Ever since then, I have been excited to learn more about the field, whether through videos, online courses, university classes, or hands-on development.</p> 
        <p>&emsp;&emsp;&ensp;Throughout my college years, I have become passionate about full stack development. I love the process of building an application from start to finish and working with different technologies along the way. I also like growing my knowledge to help and mentor others. I have been able to use my experience to tutor and assist students through my time in college.</p>
        <p>&emsp;&emsp;&ensp;I have had the privilege of growing my experience through website design, contact work, and an internship at a government corporation. Lately, I have been excited about building full stack React applications which are design-concious and user-friendly. I am currently looking for a software engineering position which will kick-start my career.</p>
      </Flex>
      <Flex
        width="41.5%"
        left="52.5%"
        top="270px"
        gap="30px"
        display="grid"
        height="100%"
        position="absolute"
      >
        <SkillBar skill="Python" percent="90%" percentadjust={90} />
        <SkillBar skill="React" percent="90%" percentadjust={90} />
        <SkillBar skill="CSS" percent="80%" percentadjust={80} />
        <SkillBar skill="HTML" percent="80%" percentadjust={80} />
        <SkillBar skill="SQL" percent="80%" percentadjust={80} />
        <SkillBar skill="Java" percent="70%" percentadjust={70} />
        <SkillBar skill="Javascript" percent="60%" percentadjust={60} />
        <SkillBar skill="Networking" percent="50%" percentadjust={50} />
        <SkillBar skill="C" percent="40%" percentadjust={40} />
        <SkillBar skill="Android" percent="40%" percentadjust={40} />
      </Flex>
    </Flex>
  );
};

export default About;
