import styles from './Home.module.css';
import { Products_Random } from '../../Components/Products Random/Products Random';
import { Products_News } from '../../Components/Products News/Products News';
import { Slide } from '../../Components/Slide/Slide';
import { Notification } from '../../Components/Notification/Notification';


const Home = () => {
    return (
        <div id={styles.Home}>
            <Slide />
            <Products_Random />
            <Products_News />
            <Notification />
        </div>
    );
};

export { Home };