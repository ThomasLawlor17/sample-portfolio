import { css, styled } from 'styled-components'
import Icon from './icons/Icon'
import { useEffect, useState } from 'react'
import useScrollDirection from '../hooks/useScrollDirection'
import { loaderDelay } from '../utils'

interface HeaderProps {
  $scrollDirection: string;
  $scrolledToTop: boolean;
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
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';


  return (
    <StyledHeader $scrollDirection={scrollDirection} $scrolledToTop={scrolledToTop}>
      <StyledNav>
        <a id='logo' href="/">adamkeys</a>
        <StyledList>
          <li><a href="/"><Icon name='github'/></a></li>
          <li><a href="http://"><Icon name='frontend'/></a></li>
          <li><a href="//"><Icon name='linkedin'/></a></li>
          <li><a href="//"><Icon name='twitter'/></a></li>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  )
}
