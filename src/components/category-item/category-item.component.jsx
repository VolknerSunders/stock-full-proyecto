import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, titulo} = category;
    return(
        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="category-body-container">
                <h2>{titulo}</h2>
                <p>¡Comprar ahora!</p>
            </div>
        </div>
    )
}

export default CategoryItem