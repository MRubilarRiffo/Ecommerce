import styles from './NavBar.module.css';
import { TopBar } from '../../Components/TopBar/TopBar';
import { Logo } from '../../Components/Logo/Logo';
import { Icon_NavBar } from '../../Components/Icon NavBar/Icon NavBar';

const NavBar = () => {
    return (
        <div id={styles.container_navbar}>
            <TopBar />
            <div id={styles.container_menu_logo_icon}>
                <Logo />
                <span>INICIO</span>
                {/* <span>PRODUCTOS</span> */}
                <Icon_NavBar />
            </div>
        </div>
    );
};

export { NavBar };