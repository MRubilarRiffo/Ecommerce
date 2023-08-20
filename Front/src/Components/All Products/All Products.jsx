import styles from './All Products.module.css';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import { Loading } from '../Loading/Loading';

const All_Products = () => {
    const products = useSelector(state => state.all_products);

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