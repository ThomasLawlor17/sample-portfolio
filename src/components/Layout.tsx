import { ThemeProvider, styled } from "styled-components"
import GlobalStyle from "../Style/GlobalStyle"
import { mainTheme as theme } from "../Style/mainTheme"
import Nav from "./Nav";
import Footer from "./Footer";
import { Location } from "../types";
import { useEffect } from "react";

const StyledContent = styled.div`
position: relative;


`

export const Layout = ({children, location}: {children: JSX.Element, location: Location}) => {

    const isHome = location.pathname === '/'

    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'))
        if (allLinks.length > 0) {
            allLinks.forEach(link => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer');
                    link.setAttribute('target', '_blank');
                }
            })
        }
    }

    useEffect(() => {
        handleExternalLinks()
    }, [])


  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>

            <StyledContent>
                <Nav isHome={isHome}/>
                <div id="content">
                    {children}
                    <Footer/>
                </div>
            </StyledContent>
        </ThemeProvider>
    </>
  )
}

export default Layout
