import styles from './NavBar.module.css';
import { TopBar } from '../../Components/TopBar/TopBar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Logo } from '../../Components/Logo/Logo';

const NavBar = () => {
    return (
        <div id={styles.container_navbar}>
            <TopBar />

            <div id={styles.container_menu_logo_icon}>
                <div>
                    <Logo />
                </div>
                <div>
                    <span>INICIO</span>
                    {/* <span>PRODUCTOS</span> */}
                </div>
                <div id={styles.container_icon}>
                    <PersonOutlineOutlinedIcon />
                    <SearchOutlinedIcon />
                    <FavoriteBorderOutlinedIcon />
                    <ShoppingBagOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export { NavBar };