import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+9779865421382">+977-9865421382</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:iamsjn44@gmail.com">
            iamsjn44@gmail.com
          </LinkItem>
        </LinkColumn>
        {/* NEW RESUME SECTION */}
        <LinkColumn>
          <LinkTitle>Resume</LinkTitle>
          <LinkItem href="/resume.pdf" download="CV_sujan.pdf">
            Download CV
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/imsjn44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/sujan-timalsina-b01127308"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://instagram.com/t_sujan7_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://facebook.com/tsujan77/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
