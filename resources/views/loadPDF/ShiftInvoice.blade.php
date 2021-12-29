<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shift invoice</title>
</head>

<style>



  .container-fluid{
    margin: auto;
    width: 80%;
    
    font-family: "sans-serif"
  }

  .m-auto{
    margin: auto;
  }

  .align-center{
    text-align: center;
  }

  .p{
    padding: 10px;
  }

  .d-block{
    display: block;
  }

  .header{
    color: white;
    background-color: black;
    border-radius: 10px;
  }

  .body{
    font-size: 20px;
  }

  table {
    width: 50%;
  }

  table > tfoot{
    font-size: 15px;
    width: 100%;
  }

  table > tbody {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }

  .conditions{
    font-size: 10px;
  }

</style>

<body>
  <div class="container-fluid align-center">
  
  <div class="header p">
    <h1> Brother BarberShop </h1>
    <h2> Turno solicitado con exito </h2>
  </div>
  <div class="body">
    <table class="m-auto text-primary">
      <thead>
      <tr>
          <td class="p"><span>Nombre</span></td>
          <td class="p"><span>{{$name}}</span></td>
        </tr>
        <tr>
          <td class="p"><span>Email</span></td>
          <td class="p"><span>{{$email}}</span></td>
        </tr>
        <tr>
          <td class="p"><span>Tel</span></td>
          <td class="p"><span>{{$phone}}</span></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td class="p">{{$motivo}}</td>
        </tr>
      <tr>
          <td class="p">Fecha</td>
          <td class="p">{{$date}}</td>
        </tr>
        <tr>
          <td class="p">Hora</td>
          <td class="p">{{$time}}</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2">  
            </td>
          </tr>
      </tfoot>
    </table> 
    <div class="conditions">
              <p>
              El turno tiene vigencia hasta la fecha dada, en caso de que no se presente en el lugar
              el dia y la hora del turno, automaticamente este sera cancelado y debera sacar uno nuevo, con fechas y horarios disponibles.
               presente este certificado en el citio a travez
                de su celular, impreso o cualquier medio donde los datos sean visibles. 
                Gracias por su colaboracion!
              </p>
    </div>   
  </div>

  </div>
</body>
</html>