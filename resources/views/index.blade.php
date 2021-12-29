<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

    <title>Home / WebShopping</title>

</head>

<body>

  <header>
    <div id="header"></div>
  </header>
  
  <section class="container-fluid bg-light p-4 min-vh-100 font-p">

    <article>
      <div id="modalTurn"></div>
    </article>

    <article class="container-md d-none d-xl-block">
        <div id="home"></div>
    </article>

    <article class="container-md">
    <div class="d-flex justify-content-left border-0 border-bottom  my-5">
        <span class="fw-bold fs-3 text-black font-h1">Nuestros productos</span>
      </div>

        <div id="slider"></div>
    </article>

  </section>


  <footer class="text-center text-lg-start bg-black text-muted font-h1">
    <div id="footer"></div>
  </footer>


    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
        integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp"
        crossorigin="anonymous"></script>
</body>




</html>