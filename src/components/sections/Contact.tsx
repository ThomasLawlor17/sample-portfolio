import { styled } from "styled-components"

const StyledSection = styled.section`

`

export default function Contact() {
  return (
    <StyledSection>
        <h1>Contact</h1>
        <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        <form action="">
            <ul>
                <li>
                    <input id="name" type="text" placeholder="name"/>
                    <label htmlFor="name"></label>
                </li>
                <li>
                    <input id="email" type="email" placeholder="email"/>
                    <label htmlFor="email"></label>
                </li>
                <li>
                    <textarea id="message" placeholder="message"/>
                    <label htmlFor="message"></label>
                </li>
            </ul>
        </form>
    </StyledSection>
  )
}
