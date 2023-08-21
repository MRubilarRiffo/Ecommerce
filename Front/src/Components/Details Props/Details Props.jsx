import styles from './Details Props.module.css';

const Details_Props = () => {
    const product = useSelector(state => state.details[0]);
    return (
        <div>Details Props</div>
    );
};

export { Details_Props };