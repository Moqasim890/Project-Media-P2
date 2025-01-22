
<?php 
        session_start();
?>

<!DOCTYPE html>
<!-- Coding By CodingNepal - youtube.com/codingnepal -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Register</title>
    <link rel="stylesheet" href="/css/static.css">
    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-black sticky-top">
    <div class="container-fluid">
        <!-- Navbar Brand Links -->
        <a class="navbar-brand">Home</a>

        <!-- Logo (positioned top-right) -->
        <div class="navbar-logo-corner">
            <img src="/img/logo.png" alt="Logo" height="40">
        </div>

        <!-- Navbar Toggler for smaller screens -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="">Home</a>
                </li>

                <li class="nav-item dropdown">
                    <a id="informatieknop" class="nav-link " href="">
                        Games
                    </a>

                <li class="nav-item">
                    <a class="nav-link" href="">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">FAQ</a>
                </li>
            </ul>

            <!-- Navbar right side (Login/Register/Logout) -->
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <div id="account-name"></div>
              </li>
                    <!-- Show Logout when user is logged in -->
                    <!-- Show Login and Register when user is not logged in -->
                    <li class="nav-item">
                        <a class="nav-link" href="/index.php">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/account/register.php">Register</a>
                    </li>
            </ul>
        </div>
    </div>
</nav>
  
    <div class="center">
      <h1>Register</h1>

      <?php 

      require_once '../includes/register-views.php'; // Example for one directory up
      
      render_errors();

      ?>
        
      <form method="post" action="../includes/register-user.php">
      
        <div class="txt_field">
          <input type="text" required name="username">
          <span></span>
          <label>Username</label>
        </div> 

        <div class="txt_field">
          <input type="password" required name="password">
          <span></span>
          <label>Password</label>
        </div>

        <!-- <div class="pass">Forgot Password?</div> -->
        <input type="submit" value="Register">
        <div class="signup_link">
          Already have an account? <a href="/index.php">Login</a>
        </div>
      </form>
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>