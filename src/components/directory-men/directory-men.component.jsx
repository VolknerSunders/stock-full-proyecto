import DirectoryItem from "../directory-item/directory-item.component"
import './directory-men.styles.scss'

const categories = [
  {
    id: 1,
    titulo: 'Cinturones',
    imageUrl: 'https://i.imgur.com/3spjorM.jpg',
    route: 'shop/cinturones'
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
    titulo: 'Playeras',
    imageUrl: 'https://i.imgur.com/ZQrH96I.jpg',
    route: 'shop/playeras'
  },
  {
    id: 5,
    titulo: 'Trajes',
    imageUrl: 'https://i.imgur.com/wDgcJxB.jpg',
    route: 'shop/trajes'
  }
]

const DirectoryMen = () => {
    return (
        <div className="directory-container">
          {categories.map((category) => (
           <DirectoryItem key={category.id} category = {category}/>
          ))}
        </div>
    )
}

export default DirectoryMen