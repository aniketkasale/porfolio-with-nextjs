import React from "react";
import { GiPodiumWinner, GiPodiumSecond } from "react-icons/gi";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <GiPodiumWinner size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Primary Skills</ListTitle>

          <ListParagraph>
            HTML, CSS, JavaScript, React JS, Next Js, React-Hooks, Bootstrap,
            Material UI, React-Router, Redux, Firebase, Git - Hub.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiPodiumSecond size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Secondary Skills</ListTitle>

          <ListParagraph>
            Node, Mongo DB, Nest Js, Express JS, C/C++, Python, DS, ML,
            WordPress, SEO, SEM, SMM, Azure - Dev.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
