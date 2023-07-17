import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

const StyledMain = styled.main`
padding-top: 198px;
display: flex;
flex-direction: column;
gap: 140px;

@media (max-width: 769px) {
  padding-top: 151px;
  gap: 100px;
}
@media (max-width: 414px) {
  padding-top: 423px;
  gap: 80px;
}
`



const App = () => {
  const location = useLocation()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true)
      }, 1000)
    }
  }, [isMounted])

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    contact?.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <>
    <Layout location={location}>
      <StyledMain>
      <Hero isMounted={isMounted} scrollToContact={scrollToContact}/>
      <Projects scrollToContact={scrollToContact}/>
      <Contact/>
      </StyledMain>
    </Layout>
    </>
  );
}

export default App;
