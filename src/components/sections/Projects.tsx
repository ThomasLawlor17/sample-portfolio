import { styled } from "styled-components"
import sr from "../../utils/sr"
import {srConfig} from '../../config'
import { useEffect, useRef, useState } from "react"


const StyledSection = styled.section`
width: 77%;
max-width: 1110px;
margin: auto;

header {
    ${({theme}) => theme.mixins.flexBetween};
    margin-bottom: 80px;
    button {
        ${({theme}) => theme.mixins.button};
    }
}

div.grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 545px));
    justify-content: space-evenly;
    row-gap: 69px;
    column-gap: 30px;
}


@media (max-width: 769px) {
    width: 92.457737%;
    max-width: 713px;

    div.grid {
        grid-template-columns: repeat(2, minmax(auto, 345px));
        column-gap: 20px;
    }
}
@media (max-width: 677px) {
    div.grid {
        display: flex;
        flex-direction: column;
    }
}
@media (max-width: 414px) {
    width: calc(100% - 30px);
}
`

const StyledProject = styled.div`
max-width: 545px;
position: relative;
.p-img {
    width: 100%;
    aspect-ratio: 5.45 / 4;
    max-height: 400px;
    background-size: cover;

    &::after {
        content: '';
        display: block;
        width; 100%;
        height: 100%;
        background: #000;
        opacity: 0;
        transition: all 0.3s linear;
    }

    &:hover {
        &::after {
            opacity: 0.75;
        }
        a {
            opacity: 1;
            z-index: 2;
        }
    }
}
h3 {
    margin: 20px 0 7px 0;
    text-transform: uppercase;
}
ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    li {
        text-transform: uppercase;
        color: var(--light-grey);
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
    }
}
a {
    ${({theme}) => theme.mixins.button}
    @media (min-width: 770px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        
        &.p-link {
            top: 28.3%;
        }
        &.c-link {
            top: 46%;
        }
    }
}
@media (max-width: 769px) {

    div.links {
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 32px;
        a {
            width: fit-content;
        }
    }
}

`

export default function Projects() {

    const revealTitle = useRef<HTMLHeadingElement>(null)
    const revealProjects = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        sr?.reveal(revealTitle.current!, srConfig())
        revealProjects.current.forEach((ref, i) => {
            sr?.reveal(ref!, srConfig(i + 100))
        })
    }, [])
    
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    const projects = [
        {
            name: 'Design Portfolio',
            tech: ['html', 'css'],
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
        <header ref={revealTitle}>
            <h1>Projects</h1>
            <button>Contact me</button>
        </header>
        <div className="grid">
            {projects.map((p, i) => (
                <StyledProject key={i} ref={(ref) => (revealProjects.current[i] = ref)}>
                    <div className="p-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/thumbnail-project-${i + 1}-large.webp)`}}>
                    {width >= 770 ? 
                    <>
                    <a className="p-link" href="/">view project</a>
                    <a className="c-link" href="/">view code</a>
                    </>
                    :''}
                    </div>
                    <h3>{p.name}</h3>
                    <ul>
                        {p.tech.map((t,i) => (
                            <li key={i}>{t}</li>
                            ) )}
                    </ul>
                    {width < 770 ? 
                    <div className="links">
                    <a className="p-link" href="/">view project</a>
                    <a className="c-link" href="/">view code</a>
                    </div>
                    :''}
                </StyledProject>
            ))}
        </div>
    </StyledSection>
  )
}
