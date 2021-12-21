const Prueba = ({authorize}) => {

  console.log(authorize);

return(
  <div> Solo administradores pueden ver esta pagina {authorize} </div>
)}


export default Prueba