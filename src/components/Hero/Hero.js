import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am Aniket Kasale <br />
          Web-Developer
        </SectionTitle>
        <SectionText>
          I am always passionate to design, code and modify WebApps, right from
          lay-outing to building the functionality as per the client's
          requirements. I strive to create visually beautiful WebApps that are
          extremely user-friendly and have brilliant user experience.
        </SectionText>
        <Button
          onClick={() => {
            window.location = "mailto:aniketkasale02@gmail.com";
          }}
        >
          Contact me
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
