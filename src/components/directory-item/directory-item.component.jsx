import './directory-item.styles.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, titulo} = category;
    return(
        <div className="directory-item-container">
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