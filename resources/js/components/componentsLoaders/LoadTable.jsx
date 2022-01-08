const LoadTable = ({td}) => {

    let arrayTd = [];

    for(let i = 0; i <= td; i++ ) 
    {
      arrayTd.push(i)
    }

  

  return(
    <tr>

      {arrayTd.map((item) => (
        <td>
        <p className="placeholder-glow">
        <span className="placeholder col-12"></span>
        </p>
        </td> 
      ))}

    </tr>
  );

}

export default LoadTable