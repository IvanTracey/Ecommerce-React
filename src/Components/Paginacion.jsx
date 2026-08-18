// Paginacion.jsx
import Pagination from '@mui/material/Pagination';

function Paginacion({ pagina, totalPaginas, onCambiarPagina }) {
  return (
    <Pagination
      count={totalPaginas}
      page={pagina}
      onChange={(event, valor) => onCambiarPagina(valor)}
      sx={{ padding: '16px' }}
    />
  );
}

export default Paginacion;