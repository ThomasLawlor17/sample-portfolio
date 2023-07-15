import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { styled } from "styled-components";

const StyledMain = styled.main`

`



const App = () => {
  const location = useLocation()

  return (
    <>
    <Layout location={location}>
      <StyledMain>
      <Hero/>
      <Projects/>
      <Contact/>
      </StyledMain>
    </Layout>
    </>
  );
}

export default App;
