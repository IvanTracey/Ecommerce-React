import Button from '@mui/material/Button';
import './Categorias.css'

function CategorySelection({ categoriaActiva, onSelectCategoria }) {
    const categorias = ["Todos", "Adornos", "Aromas", "Defumación", "Manifestación", "Piedras", "Portasahumerios", "Portavelas", "Velas"];

  return (
    <div className='categorias'>
      {categorias.map(categoria => (  
        <Button 
          key={categoria} 
          onClick={() => onSelectCategoria(categoria)} className="botones-cat" variant="contained" 
          sx={{
              bgcolor: categoria === categoriaActiva ? '#5a9d51' : '#A8B8A5', 
              color: '#000000', 
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#5a9d51',
              },
        }}>{categoria}</Button>
      ))}
    </div>
  );
}

export default CategorySelection;
