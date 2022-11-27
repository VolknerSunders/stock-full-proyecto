import { Link } from 'react-router-dom';
import ItemCard from '../item-card/item-card.component';
import './item-preview.styles.scss'

const ItemPreview = ({ title, products }) => {
    return(
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {products
                    .map((product) =>(
                    <ItemCard key={product.id} product={product} title={title}/>
                ))}
            </div>
        </div>
    )
}

export default ItemPreview;