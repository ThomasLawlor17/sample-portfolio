import { styled } from 'styled-components'
import Icon from './icons/Icon'

const StyledNav = styled.nav`
`

export default function Nav() {
  return (
    <StyledNav>
      <a href="/">adamkeys</a>
      <ul>
        <li><a href="/"><Icon name='github'/></a></li>
        <li><a href="http://"><Icon name='frontend'/></a></li>
        <li><a href="//"><Icon name='linkedin'/></a></li>
        <li><a href="//"><Icon name='twitter'/></a></li>
      </ul>
    </StyledNav>
  )
}
