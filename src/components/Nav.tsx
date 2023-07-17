import { css, styled } from 'styled-components'
import Icon from './icons/Icon'
import { useEffect, useState } from 'react'
import useScrollDirection from '../hooks/useScrollDirection'

interface HeaderProps {
  $scrollDirection: string;
  $scrolledToTop: boolean;
}
interface ListProps {
  isMounted: boolean
}


const StyledHeader = styled.header<HeaderProps>`
position: fixed;
top: 0;
width: 100%;
padding-bottom: 15px;
filter: none !important;
pointer-events: auto !important;
user-select: auto !important;
transition: all 0.3s linear;
z-index: 200;

${props =>
  props.$scrollDirection === 'up' &&
    !props.$scrolledToTop &&
    css`
      transform: translateY(0px);
      background-color: var(--black);
    `};

  ${props =>
  props.$scrollDirection === 'down' &&
    !props.$scrolledToTop &&
    css`
      transform: translateY(-100%);
    `};



`

const StyledNav = styled.nav`
${({theme}) => theme.mixins.flexBetween}
width: 77%;
max-width: 1110px;
margin: auto;
padding-top: 39px;
a {
  color: var(--white);
  font-family: Space Grotesk;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px; /* 100% */
  letter-spacing: -0.444px;

  &#logo {
    animation: slide-appear-ud 1s linear;
    position: relative;

    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background: var(--green);
      position: absolute;
      bottom: -1px;
      left: 0;
      z-index: -1;
      transition: all 0.3s linear;
    }
    &:hover::after {
      width: 100%;
    }
  }
}

@media (max-width: 769px) {
  padding-top: 29px;
  width: 92.1875%;
}
@media (max-width: 414px) {
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  a {
    font-size: 24px;
    letter-spacing: -0.333px;
  }
}`

const StyledList = styled.ul<ListProps>`
${({theme}) => theme.mixins.flexCenter}
gap: 23px;
padding-right: 30px;

li {
  animation: slide-appear-ud 1s linear;
  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.5s;
  }
  &:nth-of-type(4) {
    animation-delay: 0.8s;
  }
  ${props => !props.isMounted ? css`
  &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4) {
    opacity: 0;
  }
  ` : ''}
}
  
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
}
`

export default function Nav({isHome}: {isHome: boolean}) {

  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <StyledHeader $scrollDirection={scrollDirection} $scrolledToTop={scrolledToTop}>
      <StyledNav>
        <a id='logo' href="/" aria-label='home'>adamkeyes</a>
        <StyledList isMounted={isMounted}>
          <li><a href="https://github.com/" aria-label='github'><Icon name='github'/></a></li>
          <li><a href="https://www.frontendmentor.io/" aria-label='frontend mentor'><Icon name='frontend'/></a></li>
          <li><a href="https://www.linkedin.com/" aria-label='linkedin'><Icon name='linkedin'/></a></li>
          <li><a href="https://twitter.com/" aria-label='twitter'><Icon name='twitter'/></a></li>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  )
}
