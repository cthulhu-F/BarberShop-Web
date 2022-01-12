const LoadProduct = ({ cant }) => {

  let arrayTd = [];

  for (let i = 0; i <= cant; i++) {
    arrayTd.push(i)
  }


  return  arrayTd.map((item) => (

    <div className="col border-0 my-2" >
    <div className="card" aria-hidden="true">
      <div className="placeholder col-12 placeholder-lg" 
      style={{
        height: "200px"
      }}>
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        
      </div>
    </div>
    </div>
  ))


}

export default LoadProduct