import { ThemeProvider, styled } from "styled-components"
import GlobalStyle from "../Style/GlobalStyle"
import { mainTheme as theme } from "../Style/mainTheme"
import Nav from "./Nav";
import Footer from "./Footer";
import { Location } from "../types";
import { useEffect, useState } from "react";

const StyledContent = styled.div`



`

export const Layout = ({children, location}: {children: JSX.Element, location: Location}) => {

    const isHome = location.pathname === '/'
    const [isLoading, setIsLoading] = useState(isHome)

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
        if (isLoading) return
        if (location.hash) {
            const id = location.hash.substring(1)
            setTimeout(() => {
                const el = document.getElementById(id)
                if (el) {
                    el.scrollIntoView()
                    el.focus()
                }
            }, 0)
        }

        handleExternalLinks()
    }, [isLoading, location.hash])


  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>

            <StyledContent>
                <Nav/>
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
