import '../styles/components/sidebar.sass'
import Avatar from '../img/user.png'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Luciano" />
            <p className="title">Front-end Developer</p>
            <SocialNetworks />
            <InformationContainer />
            <p>Informações de contato</p>
            <a href="#" className="btn">Download curriculo</a>
        </aside>
    )
}

export default Sidebar