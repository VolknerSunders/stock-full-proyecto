import './categories.styles.scss'
const App = () => {

  const categorias = [
    {
      id: 1,
      titulo: 'Gorras y sombreros'
    },
    {
      id: 2,
      titulo: 'Abrigos'
    },
    {
      id: 3,
      titulo: 'Calzado'
    },
    {
      id: 4,
      titulo: 'Hombres'
    },
    {
      id: 5,
      titulo: 'Mujeres'
    }
  ]
  return (
    <div className="categories-container">
      {categorias.map(({titulo, id}) => (
        <div key={id} className="category-container">
          <div className="background"/>
          <div className="category-body-container">
            <h2>{titulo}</h2>
            <p>¡Comprar ahora!</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
