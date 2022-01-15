<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Home / WebShopping</title>

</head>

<body>

  <header>
    <div id="header"></div>
  </header>
  
  <section class="container-fluid p-4 min-vh-100 font-p">

  <article>
      <div id="modalTurn"></div>
    </article>

    <article class="container-md font-p bg-white rounded p-3">
      <div id="shoppingCart"></div>
    </article>

  </section>


  <footer class="text-center text-lg-start bg-black text-muted font-h1">
    <div id="footer"></div>
  </footer>


    <script src="{{ asset('js/app.js') }}" defer></script>
</body>




</html>