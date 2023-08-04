import styles from './NavBar.module.css';
import { TopBar } from '../TopBar/TopBar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const NavBar = () => {
    return (
        <div id={styles.container_navbar}>
            <TopBar />

            <div id={styles.container_menu_logo_icon}>
                <div>
                    <span>Home</span>
                </div>
                <div>
                    <h3>Logo</h3>
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