import PatternCircle from "./Circle"
import PatternRings from "./Rings"


const Pattern = ({name}: {name: string}) => {
    switch (name) {
        case 'circle':
            return <PatternCircle/>
        case 'rings':
            return <PatternRings/>
        default:
            return null
    }
}

export default Pattern