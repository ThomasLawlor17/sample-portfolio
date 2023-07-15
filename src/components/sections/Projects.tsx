import { styled } from "styled-components"


const StyledSection = styled.section`


`

const StyledProject = styled.div`


`

export default function Projects() {
    const projects = [
        {
            name: 'Design Portfolio',
            tech: ['html', 'css']
        },
        {
            name: 'E-Learning Landing Page',
            tech: ['html', 'css']
        },
        {
            name: 'Todo web app',
            tech: ['html', 'css', 'javascript']
        },
        {
            name: 'Entertainment web app',
            tech: ['html', 'css', 'javascript']
        },
        {
            name: 'Memory game',
            tech: ['html', 'css', 'javascript']
        },
        {
            name: 'Art Gallery Showcase',
            tech: ['html', 'css', 'javascript']
        }
    ]


  return (
    <StyledSection>
        <header>
            <h1>Projects</h1>
            <button>Contact me</button>
        </header>
        <div>
            {projects.map((p, i) => (
                <StyledProject key={i}>
                    <img src={process.env.PUBLIC_URL + `/assets/images/thumbnail-project-${i}-large.webp`} alt={p.name} />
                    <h3>{p.name}</h3>
                    <ul>
                        {p.tech.map((t,i) => (
                            <li key={i}>{t}</li>
                        ) )}
                    </ul>
                </StyledProject>
            ))}
        </div>
    </StyledSection>
  )
}
