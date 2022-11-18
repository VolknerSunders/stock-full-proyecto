import { useNavigate } from 'react-router-dom';

import './directory-item.styles.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, titulo, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return(
        <div className="directory-item-container" onClick={onNavigateHandler}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="body">
                <h2>{titulo}</h2>
                <p>¡Comprar ahora!</p>
            </div>
        </div>
    )
}

export default CategoryItem