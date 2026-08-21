import Button from '@mui/material/Button';
import './Categorias.css'

export default function ContainedButtons() {
    const categorias = ["Todos", "Adornos", "Aromas", "Defumación", "Manifestación", "Piedras", "Portasahumerios", "Portavelas", "Velas"];

  return (
    <div className='categorias'>
      {categorias.map(categoria => (  
        <Button key={categoria} className="botones-cat" variant="contained" 
            sx={{
                bgcolor: '#A8B8A5', 
                color: '#000000', 
                fontWeight: 'bold',
                '&:hover': {
                bgcolor: '#7cc26f',
                },
        }}>{categoria}</Button>
      ))}
    </div>
  );
}
