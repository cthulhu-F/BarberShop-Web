const LoadTablePagination = ({colspan}) => {

return(
  <tr>
  <td colSpan={colspan}>
    <p className="placeholder-glow">
      <span className="placeholder col-12"></span>
    </p>
  </td>  
</tr>
);

}

export default LoadTablePagination