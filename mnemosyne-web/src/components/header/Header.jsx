import { Link } from 'react-router-dom';
import LogoMnemosyne from '../../assets/icons/mnemosyne-logo.svg'
const Header = () => {

    return(
        <header class="app-header">
            <Link to="/">
                 <img src={ LogoMnemosyne } alt="Logo do site Mnemosyne."/>
            
            </Link>
        <nav class="links">
       <Link to="/">Home</Link>
       <Link to="/criar">Adicionar memória</Link>
        </nav>
    </header>
    )

    
}

export default Header;