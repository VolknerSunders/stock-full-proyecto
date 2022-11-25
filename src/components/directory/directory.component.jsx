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
    titulo: 'Invierno',
    imageUrl: 'https://i.imgur.com/H1hP7AX.jpg',
    route: 'shop/invierno'
  },
  {
    id: 3,
    titulo: 'Sudaderas',
    imageUrl: 'https://i.imgur.com/5mKYCpf.jpg',
    route: 'shop/sudaderas'
  },
  {
    id: 4,
    titulo: 'Hombres',
    imageUrl: 'https://i.imgur.com/QtnngMv.jpg',
    route: 'men'
  },
  {
    id: 5,
    titulo: 'Mujeres',
    imageUrl: 'https://i.imgur.com/zXQApog.jpg',
    route: 'women'
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