import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Categorias.css'

export default function ContainedButtons() {
    const categorias = ["Todos", "Adornos", "Aromas", "Defumación", "Manifestación", "Piedras", "Portasahumerios", "Portavelas", "Velas"];

  return (
    <div className='categorias'>
      {categorias.map(categoria => (  
        <Button key={categoria} className="botones-cat" variant="contained" 
            sx={{
                bgcolor: '#bbd9b6', 
                color: '#000000', 
                fontWeight: 'bold',
                '&:hover': {
                bgcolor: '#57a349',
                },
        }}>{categoria}</Button>
      ))}
    </div>
  );
}
