import styles from './All Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Card } from '../Card/Card';
import { Loading } from '../Loading/Loading';

const All_Products = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.all_products);

    console.log(products);

    // useEffect(() => {
    //     dispatch
    // }, []);

    return (
        <div>
            Productos
            {
                products.length > 0
                    ? products.map(props => <Card props={props} />)
                    : <Loading />
            }
        </div>
    );
};

export { All_Products };