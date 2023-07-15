import { styled } from "styled-components"
import Pattern from "../icons/Pattern"


const StyledSection = styled.section`


`

export default function Hero() {
  return (
    <StyledSection>
      <h1>Nice to meet you! I'm <span>Adam Keys</span></h1>
      <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
      <button>Contact me</button>
      <div className="img">
        <img src={process.env.PUBLIC_URL + '/assets/images/image-profile-desktop.webp'} alt="" />
        <Pattern name='circle'/>
      </div>
      <div className="skills">
        <ul>
          <li><h2>HMTL</h2><p>4 Years Experience</p></li>
          <li><h2>CSS</h2><p>4 Years Experience</p></li>
          <li><h2>Javascript</h2><p>4 Years Experience</p></li>
          <li><h2>Accessibility</h2><p>4 Years Experience</p></li>
          <li><h2>React</h2><p>3 Years Experience</p></li>
          <li><h2>Sass</h2><p>3 Years Experience</p></li>
        </ul>
      </div>
    </StyledSection>
  )
}
