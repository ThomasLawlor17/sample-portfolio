import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { styled } from "styled-components";

const StyledMain = styled.main`
padding-top: 198px;

@media (max-width: 769px) {
  padding-top: 151px;
}
@media (max-width: 414px) {
  padding-top: 423px;
}
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
