import styles from './Loading.module.css';
import img from '../../assets/Loading.png';

const Loading = () => {
    return (
        <div id={styles.container_loading}>
            <img src={img} alt="" id={styles.img_loading} />
        </div>
    );
};

export { Loading };