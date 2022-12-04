import '../styles/components/MainContent.sass'
import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjetsContainer from './ProjetsContainer'
const MainContent = () => {
    return(
        <main id='main-content'>
            <AboutContainer/>
            <TechnologiesContainer/>
            <ProjetsContainer/>
        </main>
    )
}

export default MainContent