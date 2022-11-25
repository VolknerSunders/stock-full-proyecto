import DirectoryItem from "../directory-item/directory-item.component"
import './directory-women.styles.scss'

const categories = [
  {
    id: 1,
    titulo: 'Zapatillas',
    imageUrl: 'https://i.imgur.com/lsgRNHn.jpg',
    route: 'shop/zapatillas'
  },
  {
    id: 2,
    titulo: 'Lentes de sol',
    imageUrl: 'https://i.imgur.com/SZlxfUD.jpg',
    route: 'shop/lentes'
  },
  {
    id: 3,
    titulo: 'Flats',
    imageUrl: 'https://i.imgur.com/FmkCTjO.jpg',
    route: 'shop/flats'
  },
  {
    id: 4,
    titulo: 'Faldas',
    imageUrl: 'https://i.imgur.com/B64T1pj.jpg',
    route: 'shop/faldas'
  },
  {
    id: 5,
    titulo: 'Blusas',
    imageUrl: 'https://i.imgur.com/vFpZLpx.jpg',
    route: 'shop/blusas'
  }
]

const DirectoryWomen = () => {
    return (
        <div className="directory-container">
          {categories.map((category) => (
           <DirectoryItem key={category.id} category = {category}/>
          ))}
        </div>
    )
}

export default DirectoryWomen