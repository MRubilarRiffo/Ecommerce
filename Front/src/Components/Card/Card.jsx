import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { formatPrice } from '../../Functions/formatPrice';
import { IoHeartOutline } from 'react-icons/io5';


const Card = ({ props }) => {
    return (
        <div className={styles.card}>
			<Link to={`/products/${props.slug}`}>
				
				<div className={styles.container_img}>
					<div className={styles.favorites}>
						<IoHeartOutline />
					</div>
					{props.discount > 0 &&
						<div id={styles.offer_price}>
							<span>-{props.discount}%</span>
						</div>
					}
					{!props.image_standar
						? <Loading />
						: props.image_hover
							? <>
								<img src={props.image_standar} alt="" className={styles.normal_image} loading="lazy" />
								<img src={props.image_hover} alt="" className={styles.hover_image} loading="lazy" />
							</>
							:
							<img src={props.image_standar} alt="" loading="lazy" />
					}
				</div>

				<div className={styles.props_card}>
					<div className={styles.container_name}>
						<h4>{props.brand.toUpperCase()}</h4>
					</div>
					<div className={styles.container_name}>
						<h5>{props.name.toUpperCase()}</h5>
					</div>
					<div className={styles.price}>
                        {props.discount > 0
                            ? <>
                                <h4>{formatPrice(props.currentPrice)}</h4>
                                <span>{formatPrice(props.standard_price)}</span>
                            </>
                            : <h4>{formatPrice(props.standard_price)}</h4>
                        }
					</div>
				</div>
			</Link>
		</div>
    );
};

export { Card };