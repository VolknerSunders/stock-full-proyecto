import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      titulo: 'Gorras y sombreros',
      imageUrl: 'https://i.imgur.com/wrTCmo6.jpg'
    },
    {
      id: 2,
      titulo: 'Abrigos',
      imageUrl: 'https://i.imgur.com/IYmrACk.jpg'
    },
    {
      id: 3,
      titulo: 'Calzado',
      imageUrl: 'https://i.imgur.com/2Xi9oRx.jpg'
    },
    {
      id: 4,
      titulo: 'Hombres',
      imageUrl: 'https://i.imgur.com/QtnngMv.jpg'
    },
    {
      id: 5,
      titulo: 'Mujeres',
      imageUrl: 'https://i.imgur.com/zXQApog.jpg'
    }
  ]
  return (
    <Directory categories={categories}/>
  );
}

export default App;
