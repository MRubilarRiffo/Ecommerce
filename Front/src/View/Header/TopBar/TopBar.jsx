import styles from "./TopBar.module.css";

const TopBar = () => {
    return (
        <div id={styles.container_topbar}>
            Free Delivery on orders over $200. Don’t miss discount.
        </div>
    );
};

export { TopBar };