import styles from './Logo.module.css';
import logo from '../../assets/Logo.svg';

const Logo = () => {
    return (
        <div id={styles.logo}>
            <img src={logo} alt="Logo Innovoza" />
        </div>
    );
};

export { Logo };