import IconError from "./Error"
import IconFrontendMentor from "./FrontendMentor"
import IconGithub from "./Github"
import IconLinkedin from "./Linkedin"
import IconTwitter from "./Twitter"


const Icon = ({name}: {name: string}) => {
    switch (name) {
        case 'github':
            return <IconGithub/>
        case 'frontend':
            return <IconFrontendMentor/>
        case 'linkedin':
            return <IconLinkedin/>
        case 'twitter':
            return <IconTwitter/>
        case 'error':
            return <IconError/>
        default:
                return null
    }
}

export default Icon