import styles from './Header.module.css';
import svg from "..//..//assets/image/logo_01.svg";

function Header() {
    return(
        <header className={styles.nav_conteiner}>
            <nav className={styles.nav_content}>
                <img src={svg} alt="imagem do logo" />
            </nav>
        </header>    
    )
}

export default Header;