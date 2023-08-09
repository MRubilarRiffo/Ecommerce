import styles from './Logo.module.css';
import logo from '../../assets/Logo/Logo.svg';
import logo_mobil from '../../assets/Logo/Logo Mobil.svg';
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    return (
        <div id={styles.container_logo}>
            <img
                id={styles.logo}
                onClick={() => navigate('/')}
                src={logo}
                alt='Innovoza'
                loading='lazy'
            />
            <img
                id={styles.logo_mobil}
                onClick={() => navigate('/')}
                src={logo_mobil}
                alt='Innovoza'
                loading='lazy'
            />
        </div>
    );
};

export { Logo };