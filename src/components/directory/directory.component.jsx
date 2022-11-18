import DirectoryItem from "../directory-item/directory-item.component"
import './directory.styles.scss'

const categories = [
  {
    id: 1,
    titulo: 'Gorras y sombreros',
    imageUrl: 'https://i.imgur.com/wrTCmo6.jpg',
    route: 'shop/gorras'
  },
  {
    id: 2,
    titulo: 'Abrigos',
    imageUrl: 'https://i.imgur.com/IYmrACk.jpg',
    route: 'shop/abrigos'
  },
  {
    id: 3,
    titulo: 'Calzado',
    imageUrl: 'https://i.imgur.com/2Xi9oRx.jpg',
    route: 'shop/calzado'
  },
  {
    id: 4,
    titulo: 'Hombres',
    imageUrl: 'https://i.imgur.com/QtnngMv.jpg',
    route: 'shop/hombres'
  },
  {
    id: 5,
    titulo: 'Mujeres',
    imageUrl: 'https://i.imgur.com/zXQApog.jpg',
    route: 'shop/mujeres'
  }
]

const Directory = () => {
    return (
        <div className="directory-container">
          {categories.map((category) => (
           <DirectoryItem key={category.id} category = {category}/>
          ))}
        </div>
    )
}

export default Directory