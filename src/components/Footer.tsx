import { styled } from "styled-components"

import Icon from "./icons/Icon"

const StyledFooter = styled.footer`
position: absolute;
bottom: 0;
${({theme}) => theme.mixins.flexBetween}
padding: 47px 0 92px 0;
width: 77%;
margin: auto;
left: 0;
right: 0;
border-top: 1px var(--white) inset;
span {
  color: var(--white);
  font-family: Space Grotesk;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px; /* 100% */
  letter-spacing: -0.444px;
}

@media (max-width: 769px) {
  padding: 30px 0 40px 0;
  width: 92.1875%;
}
@media (max-width: 414px) {
  padding: 39px 0 60px 0;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  span {
    font-size: 24px;
    letter-spacing: -0.333px;
  }
}`

const StyledList = styled.ul`
${({theme}) => theme.mixins.flexCenter}
gap: 23px;
padding-right: 30px;
  
svg {
  path {
    transition: all 0.3s linear;
  }
  &:hover path {
    fill: var(--green);
  }
}
@media (max-width: 769px) {
  padding-right: 0;
}
@media (max-width: 414px) {
  gap: 25px;
  svg {
    width: 20px;
    height: 20px;
  }
}`

export default function Footer() {
  return (
    <StyledFooter>
    <span>adamkeyes</span>
    <StyledList>
      <li><a href="https://github.com/" aria-label="github"><Icon name='github'/></a></li>
      <li><a href="https://www.frontendmentor.io/" aria-label="frontend mentor"><Icon name='frontend'/></a></li>
      <li><a href="https://www.linkedin.com/" aria-label="linkedin"><Icon name='linkedin'/></a></li>
      <li><a href="https://twitter.com/" aria-label="twitter"><Icon name='twitter'/></a></li>
    </StyledList>
  </StyledFooter>
  )
}
