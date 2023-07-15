import { styled } from "styled-components"

import Icon from "./icons/Icon"

const StyledNav = styled.nav`


`

export default function Footer() {
  return (
    <StyledNav>
    <span>adamkeys</span>
    <ul>
      <li><a href="/"><Icon name='github'/></a></li>
      <li><a href="http://"><Icon name='frontend'/></a></li>
      <li><a href="//"><Icon name='linkedin'/></a></li>
      <li><a href="//"><Icon name='twitter'/></a></li>
    </ul>
  </StyledNav>
  )
}
