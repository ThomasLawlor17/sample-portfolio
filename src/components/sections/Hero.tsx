import { css, styled } from "styled-components"
import Pattern from "../icons/Pattern"
import { useEffect, useState } from "react"

interface ListProps {
  isMounted: boolean
}

const StyledSection = styled.section`
display: flex;
flex-direction: column;
width: 77%;
max-width: 1110px;
margin: auto;
gap: 72px;

.rings {
  position: absolute;

  &:first-of-type {
    top: 133px;
    left: -100px;
  }
  &:nth-of-type(2) {
    top: 1077px;
    right: -239px;
  }
}
@media (max-width: 769px) {
  width: 92.457737%;
  max-width: 713px;
  gap: 52px;

  .rings {
    &:first-of-type {
      top: 86px;
      left: -265px;
    }
    &:nth-of-type(2) {
      top: 1047px;
      right: -332px;
    }
  }
}
@media (max-width: 414px) {
  gap: 40px;
  border-bottom: 1px inset var(--white);
  .rings {
    &:first-of-type {
      top: 124px;
      left: -342px;
    }
    &:nth-of-type(2) {
      top: 1287px;
      right: -344px;
    }
  }
}
`

const StyledContent = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
padding-bottom: 219px;
border-bottom: 1px inset var(--white);

h1 {
  cursor: default;
  animation: slide-appear-lr 1s linear;
  span {
    background-image: linear-gradient(
      to right,
      var(--green) 50%,
      var(--white) 50%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200%;
    background-position: right;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s linear;
    position: relative;
    &:hover {
      background-position: left;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 0;
      width: 100%;
      height: 6px;
      background: var(--green);
      z-index: -1;
    }
  }
}
p.about {
  width: 445px;
  color: var(--light-grey);
  margin-top: 37px;
  animation: appear 1s linear;
}
button {
  ${({theme}) => theme.mixins.button};
  margin-top: 66px;
  animation: slide-appear-du 1s linear;
}


.img {
  position: absolute;
  width: 445px;
  height: 720px;
  background: url('${process.env.PUBLIC_URL}/assets/images/image-profile-desktop.webp'), 0px 0px / 100% 100% no-repeat;
  background-size: cover;
  top: 0;
  right: 11.785714%;
  z-index: -1;
  animation: slide-appear-rl 1s linear;

  svg {
    position: absolute;
    left: -64px;
    bottom: 70px;
    animation: scale 1s linear;
  }
}

@media (max-width: 769px) {
  padding-bottom: 60px;
  h1, p.about {
    max-width: 445px;
  }
  p.about {
    margin-top: 60px;
  }
  button {
    margin-top: 34px;
  }

  .img {
    background: url('${process.env.PUBLIC_URL}/assets/images/image-profile-tablet.webp'), 0px 0px / 100% 100% no-repeat;
    background-size: cover;
    width: 322px;
    height: 600px;
    right: 0;

    svg {
      right: -64px;
      bottom: 0;
      left: auto;
    }
  }
}
@media (max-width: 414px) {
  padding-bottom: 80px;
  h1, p.about {
    text-align: center;
    width: 100%;
  }
  h1 {
    span::after {
      bottom: 0px;
    }
  }
  p.about {
    margin-top: 26px;
  }
  button {
    margin: 24px auto 0 auto;
  }

  .img {
    background: url('${process.env.PUBLIC_URL}/assets/images/image-profile-mobile.webp'), linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, #242424 100%);
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    width: 174.207px;
    height: 383px;
    top: 0;
    left: 0;
    margin: auto;
    z-index: 2;

    svg {
      right: -100%;
    }
  }
}






`

const StyledList = styled.ul<ListProps>`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(auto, 345px));
row-gap: 58px;

li {
  p {
    color: var(--light-grey);
    padding-top: 14px;
  }
  animation: slide-appear-du 1s linear;
  &:nth-of-type(2) {
    animation-delay: 0.33s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.66s;
  }
  ${props => !props.isMounted ? css`
  &:nth-of-type(2), &:nth-of-type(3) {
    opacity: 0;
  }` : ''}

}
@media (max-width: 769px) {
  grid-template-columns: repeat(2, minmax(auto, 345px));
  li {
    width: 50%;
    &:nth-of-type(4) {
      animation-delay: 1s;
    }
    ${props => !props.isMounted ? css`
    &:nth-of-type(4) {
      opacity: 0;
    }` : ''}
  }
}
@media (max-width: 414px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 40px;
  gap: 24px;
  li {
    p {
      padding-top: 0;
    }
  }
}
`

export default function Hero({isMounted, scrollToContact}: {isMounted: boolean, scrollToContact: ()=>void}) {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])



  return (
    <StyledSection id="hero">
      <StyledContent>
      <h1>Nice to {width > 414 && width < 770 ? <br/> : ''}meet you!{width < 414 || width > 770 ? <br/> : ''} I'm <span>Adam&nbsp;Keys</span>.</h1>
      <p className="about">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
      <button onClick={scrollToContact}>Contact me</button>
      <div className="img">
        <Pattern name='circle'/>
      </div>
      </StyledContent>
        <StyledList isMounted={isMounted}>
          <li><h2>HMTL</h2><p>4 Years Experience</p></li>
          <li><h2>CSS</h2><p>4 Years Experience</p></li>
          <li><h2>Javascript</h2><p>4 Years Experience</p></li>
          <li><h2>Accessibility</h2><p>4 Years Experience</p></li>
          <li><h2>React</h2><p>3 Years Experience</p></li>
          <li><h2>Sass</h2><p>3 Years Experience</p></li>
        </StyledList>
        <Pattern name='rings'/>
        <Pattern name='rings'/>
    </StyledSection>
  )
}
