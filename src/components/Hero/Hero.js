import React from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

// Right side container
const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

// Profile image style
const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4f49496a;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin: 20px;
`;

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>

        <SectionText>
          Hi, I'm Sujan Timalsina — a passionate Full Stack Developer focused on
          building modern, scalable, and high-performance web applications using
          MERN Stack, Next.js, TypeScript, and PostgreSQL. I enjoy creating
          responsive user experiences, real-time applications, and secure
          backend systems to solve real-world problems while continuously
          improving my skills in system design and software engineering.
        </SectionText>

        <Link href="#about">
          <Button>Learn More</Button>
        </Link>
      </LeftSection>

      <RightSection>
        <ProfileImage src="/images/profile.png" alt="Profile Picture" />
      </RightSection>
    </Section>
  </>
);

export default Hero;
