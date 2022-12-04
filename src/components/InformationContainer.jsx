import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/InformationContainer.sass'

const InformationContainer = () => {
    return(<section id='Information'>
        <div className="info-card">
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(71)992213696</p>
            </div>
        </div>

        <div className="info-card">
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>lucianosena21335@gmail.com</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Bahia / Salvador</p>
            </div>
        </div>
    </section>
    )
}

export default InformationContainer