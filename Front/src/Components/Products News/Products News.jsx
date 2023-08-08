import styles from './Products News.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsProducts } from '../../Redux/actions';
import { Card } from '../Card/Card';
import { Loading } from '../Loading/Loading';

const Products_News = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsProducts());
    }, []);

    const products = useSelector(state => state.news_products);

    return (
        <div>
            <h2>NOVEDADES</h2>
            {
                products.length > 0
                ? <div className={styles.container_card}>
                    {products.map((props, index) => <Card key={index} props={props} />)}
                </div>
                : <Loading />
            }
        </div>
    );
};

export { Products_News };